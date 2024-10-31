import React, {createContext, useContext, useState, useEffect} from'react'
import {auth} from '../../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const UserAuth = createContext();

export const AuthProvider  = ({children}) =>{
    const[user,setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
        });
        return ()=> unsubscribe();

    },[]);
    return (
        <UserAuth.Provider value = {{user}}>
            {children}
        </UserAuth.Provider>
    );
};
export const useAuth =()=>{
    return useContext(UserAuth);
}
