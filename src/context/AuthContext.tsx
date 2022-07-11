import { createContext } from 'react';

export interface InterfaceAuthContext{
    user:any,
    login: (email:string, password:string) => any,

}

const AuthContext = createContext<InterfaceAuthContext>({} as InterfaceAuthContext)

export default AuthContext
