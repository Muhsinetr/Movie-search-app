import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [auth,setAuth]=useState(true);
    useEffect(()=>{
        if(localStorage.getItem('is-auth')){
            const isAuth = JSON.parse(localStorage.getItem('is-auth'));
          setAuth(isAuth.Toket)
          console.log(isAuth.Toket);
          }      
    },[]);
    useEffect(() => {
        localStorage.setItem('is-auth', JSON.stringify({Toket:auth}));
      }, [auth]);
    
return(<AuthContext.Provider value={{auth,setAuth}}>
    {children}
</AuthContext.Provider>)
}
