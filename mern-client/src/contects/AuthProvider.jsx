import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };


    const loginwithGoogle  = () => {
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
      // console.log(currentUser);
      setUser(currentUser)
      setLoading(false)
    })
    return ()=> {
      return unsubscribe()
    }
  },[])

  const authinfo = {
    user,
    createUser,
    loginwithGoogle
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;