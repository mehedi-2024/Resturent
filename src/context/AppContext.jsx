
import React, { createContext } from 'react'
import { auth } from '../auth/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';


export const AppContext = createContext()

const AppContextCompo = ({ children }) => {

    const provider = new GoogleAuthProvider();
    const signupWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const signupWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authValu = {
        signupWithGoogle,
        signupWithPassword,
        signinWithPassword
    }

    const value = {
        authValu
    }
    return (
        <AppContext value={value}>
            {children}
        </AppContext>
    )
}

export default AppContextCompo