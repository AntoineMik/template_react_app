import React from 'react'

export const AuthContext = React.createContext({
    user: null,
    signin: (credentials, callback) => {},
    signUp: (newUser, callback) => {},
    signout: (callback) => {},

})

export function useAuth() {
    return React.useContext(AuthContext);
}

export default AuthContext