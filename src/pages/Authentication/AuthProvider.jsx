import React, { useReducer, useState } from "react";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {setDoc, doc, collection, getDoc } from "firebase/firestore";
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import * as actionTypes from './authActionTypes';
import authReducer from "./authReducer";
import { AuthContext } from "../../context/AuthContext";
import { useSnackbar } from "notistack";
import { firestore, firebase_storage, firebase_auth } from "../../firebase/firebaseConfig";

function AuthProvider({children }) {
    const { enqueueSnackbar } = useSnackbar();  
    const initialUserData = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : null;
    const [user, dispatch] = useReducer(authReducer, initialUserData);
    const [photoURL, setPhotoURL] = useState('');
  
    const signOut = async (callback) => {
      await firebase_auth.signOut()
          .then(() => {
              console.log('Sign out success');
              enqueueSnackbar('Signed out !', { variant: "success" });
              dispatch({
                  type: actionTypes.LOGOUT_SUCCESS
              });
          }).catch((error) => {
            enqueueSnackbar(error.message, { variant: "error" });
            dispatch({
                type: actionTypes.LOGOUT_ERROR, error: error
            });
          });
          callback()
    }
  
    const signIn = async(credentials, callback) => {
      await signInWithEmailAndPassword( firebase_auth, credentials.email, credentials.password)
          .then(async (result) => {
            const collectionRef = collection(firestore, 'users');
            await getDoc(doc(collectionRef, result.user.uid))
            .then((docSnap) => {
              const userData = {...docSnap.data()};
              dispatch({
                  type: actionTypes.LOGIN_SUCCESS, user: userData
              });
            });
          }).catch((error) => {
              console.log('Sign In Failed', error.message);
              //toast.error(error.message);
              enqueueSnackbar(error.message, { variant: "error" });
              dispatch({ 
                  type: actionTypes.LOGIN_ERROR, error: error 
              });
          })
          callback()
    }
  
    const signUp = async (newUser, callback) => {
      console.log(newUser)
      await createUserWithEmailAndPassword(firebase_auth, newUser.email, newUser.password)
      .then(async(result) => {
          try {
              if(newUser.profileImage){
                const storageRef = ref(firebase_storage, `profileImages/${Date.now()+result.user.uid}`);
                const uploadTask = uploadBytesResumable(storageRef, newUser.profileImage);
                uploadTask.on(
                    (error) => {
                        //toast.error(error.message);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(
                            async(DownloadURL) => {
                                setPhotoURL(DownloadURL);
                            });
                    }
                );
              } 
              const collectionRef = collection(firestore, 'users');
              const newUserData = {
                uid: result.user.uid,
                firstName: newUser.firstName, 
                lastName: newUser.lastName,
                displayName: newUser.firstName + " " + newUser.lastName, 
                artist_name: '',
                initials: newUser.firstName[0] + newUser.lastName[0],
                email: newUser.email,
                phoneNumber: result.user.phoneNumber,
                photoURL: photoURL ? photoURL: '',
                metadata: result.user.metadata ? {...result.user.metadata} : null,
                emailVerified: result.user.emailVerified,
                isAnonymous: result.user.isAnonymous,
                isAdmin: false,
              }
              await setDoc(doc(collectionRef, result.user.uid), newUserData)
              .then(() => {
                dispatch({
                  type: actionTypes.SIGNUP_SUCCESS, user: newUserData
                });
              });
              console.log("SIGNUP SUCCESS"); 
          } catch(err) {
              console.log("Failed to save user profile", err.message);
              enqueueSnackbar(err.message, { variant: "error" });
          }
      }).catch((error) => {
          console.log("SIGNUP ERROR", error.message);
          enqueueSnackbar(error.message, { variant: "error" });
          dispatch({
              type: actionTypes.SIGNUP_ERROR, error: error
          });
      }); 
      callback()
    }
  
    const useGoogle = async (callback) => {
      const provider = new GoogleAuthProvider();
      await signInWithPopup( firebase_auth, provider)
      .then(async(result) => {
        const collectionRef = collection(firestore, 'users');
        const userData = {
          uid: result.user.uid,
          firstName: result.user.firstName ? result.user.firstName : '', 
          lastName: result.user.lastName ? result.user.lastName : '',
          initials: (result.user.lastName && result.user.firstName) ? result.user.firstName[0] + result.user.lastName[0] : '',
          displayName: result.user.displayName ? result.user.displayName : '', 
          artist_name: result.user.artist_name ? result.user.artist_name : '',
          email: result.user.email,
          phoneNumber: result.user.phoneNumber,
          photoURL: result.user.photoURL,
          metadata: result.user.metadata ? {...result.user.metadata} : null,
          emailVerified: result.user.emailVerified,
          isAnonymous: result.user.isAnonymous,
          isAdmin: false,
        }
        await getDoc(doc(collectionRef, result.user.uid)).then(async (docSnap) => {
          if(docSnap.data()) {
            const oldUserData = {...docSnap.data()};
            dispatch({
              type: actionTypes.USE_GOOGLE_SUCCESS, user: oldUserData
            });
          }
          else {
            await setDoc(doc(collectionRef , result.user.uid), userData)
              .then(() => {
                dispatch({
                    type: actionTypes.USE_GOOGLE_SUCCESS, user: userData
                });
              });
          }
        })
      }).catch((error) => {
          console.log('Authentication failed', error.message);
          enqueueSnackbar(error.message, { variant: "error" });
          dispatch({ 
              type: actionTypes.USE_GOOGLE_ERROR, error: error 
          });
      });
      callback()
    }
  
    let value = { ...user, signOut, signIn, signUp, useGoogle }
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
  