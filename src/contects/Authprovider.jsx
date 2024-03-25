import React, { createContext, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app);

const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true);

    const createUser=(email,password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        createUser
    }


  return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
  )
}

export default Authprovider
