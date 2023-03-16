import { useState, useEffect } from 'react';
import { firestore } from './firebaseConfig';
import { collection, query, orderBy, onSnapshot, where  } from "firebase/firestore";

export const useFirestore = (collection_name) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {

    const q = query(collection(firestore, collection_name), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const artworks = [];
      querySnapshot.forEach((doc) => {
          artworks.push({...doc.data(), id: doc.id});
      });
      setDocs(artworks);
    });

    return async () => unsubscribe();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection_name]);

  return { docs };
}

export const useFirestoreUser = (collection_name, userID) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, collection_name), 
    where("artist_uid", "==", userID));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const artworks = [];
      querySnapshot.forEach((doc) => {
          artworks.push({...doc.data(), id: doc.id});
      });
      setDocs(artworks);
    });

    return async () => unsubscribe();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection_name, userID]);

  return { docs };
}

export default useFirestore;