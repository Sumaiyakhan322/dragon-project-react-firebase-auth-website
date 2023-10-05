import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase_config";
import { useEffect } from "react";
const auth = getAuth(app);

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('user currently login',currentUser);
            setUser(currentUser)
          
        })
        return ()=>{
            unSubscribe()
        }
    },[])



    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }



    const SignOutUser=()=>{
        return signOut(auth)
    }


    const authInfo={user ,createUser,SignOutUser,login}
    

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;