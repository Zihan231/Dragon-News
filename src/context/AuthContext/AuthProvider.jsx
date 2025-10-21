import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config.js';

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    // UpdateProfile
    const Update = (data) => {
        return updateProfile(auth.currentUser, data);
    }
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
    // setUser
    const [user, SetUser] = useState(null);
    // Set Loading
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            SetUser(currentUser);
            SetIsLoading(false);
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
        handleSignIn,
        isLoading,
        Update
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;