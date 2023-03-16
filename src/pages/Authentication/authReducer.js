import * as actionTypes from './authActionTypes';

const authReducer = (state, action) => {
    console.log(action)
    console.log(state)
    switch(action.type) {
        case actionTypes.SET_USER:
            console.log(state)
            state = {
                ...state,
                user: action.user,
                uid: Math.floor(Math.random() * 1000),
            }
            localStorage.setItem('state', JSON.stringify(state));
            return state;

        case actionTypes.LOGIN_ERROR:
            console.log('login error');
            state = {
                ...state,
                authError: action.error.message,
                currentUser: false
            }
            console.log('Login Error: ', action.error.message);
            return state;
        
        case actionTypes.LOGIN_SUCCESS:
            console.log('login success');
            state = {
                ...state,
                user: action.user,
                authError: null,
            }
            localStorage.setItem('state', JSON.stringify(state));
            console.log(state)
            return state;
        
        case actionTypes.LOGOUT_SUCCESS:
            console.log('logout success');
            state = {
                ...state,
                user: null,
                authError: null,
            }
            localStorage.clear();
            return state;

        case actionTypes.LOGOUT_ERROR:
            console.log('logout error');
            state = {
                ...state,
                authError: action.error.message
            }
            return state;

        case actionTypes.SIGNUP_SUCCESS:
            console.log('signup success');
            state = {
                ...state,
                user: action.user,
                authError: null
            };
            localStorage.setItem('state', JSON.stringify(state));
            return state;

        case actionTypes.SIGNUP_ERROR:
            console.log('signup error');
            state = {
                ...state,
                authError: action.error.message
            }
            return state;

        case actionTypes.USE_GOOGLE_SUCCESS:
            console.log('Google authentication success');
            state = {
                ...state,
                user: action.user,
                authError: null
            }
            localStorage.setItem('state', JSON.stringify(state));
            return state;
    
        case actionTypes.USE_GOOGLE_ERROR:
            console.log('Google authentication failed');
            state = {
                ...state,
                authError: action.error.message
            }
            return state;
        
        default:
            return state;

    }
}
  
export default authReducer;