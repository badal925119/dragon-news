import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FirebseInit';

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


// sign In section
const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


// Registation section
    const creatLogin = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Logout section
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
        .then(() => {
            // Sign-out successful.
          })
        .catch((error) => {
            // An error happened.
          });
          
    }

    // updatedProfile section
    const updateDataProfile =(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);

    }

    const authInfo ={
        creatLogin,
        user,
        setUser,
        logOut,
        signIn,
        loading,
        updateDataProfile,

    }
    useEffect(()=>{
        const Unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            Unsubcribe()

        }
    },[])
    return (
       <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;