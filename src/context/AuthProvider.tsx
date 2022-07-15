import React, { createContext } from 'react';
import AuthContext, { InterfaceAuthContext, User } from './AuthContext';
import {login} from '../services/user'

interface Props{
    children: JSX.Element;
}

 class AuthProvider extends React.Component<Props,InterfaceAuthContext>{
    constructor(props:Props){
        super(props)

        this.state = { 
            user:null,
            setUser: (user:User) =>{
                this.setState({user})
            } 

        }
    }

     render(){
         return(
             <AuthContext.Provider value={this.state}>
                 {this.props.children}
             </AuthContext.Provider>

         )
     }

 }

 export default AuthProvider