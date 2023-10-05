import { createContext } from "react";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const authInfo={
        name:'sumaiya'
    }
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;