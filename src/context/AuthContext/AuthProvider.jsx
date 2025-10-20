import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config.js';

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    // Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signOut
    const handleSignOut = () => {
        return signOut(auth);
    }
    // Login
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const [user, SetUser] = useState(null);
    console.log(user);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            SetUser(currentUser);
        });
        return () => {
            unSubscribe()
        };
    }, [auth]);
    const authData = {
        user,
        SetUser,
        createUser,
        handleSignOut,
        handleSignIn
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;