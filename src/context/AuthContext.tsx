import { createContext } from 'react';

export interface User{
    _id:string,
    name:string,
    email:string,
}

export interface InterfaceAuthContext{
    user:User|null,
    setUser:(user:User) =>void
}

const AuthContext = createContext<InterfaceAuthContext>({} as InterfaceAuthContext)

export default AuthContext
