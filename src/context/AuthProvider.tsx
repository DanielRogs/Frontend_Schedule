import React, { createContext } from 'react';
import AuthContext, { InterfaceAuthContext, User } from './AuthContext';
import {login} from '../services/user'

interface Props{
    children: JSX.Element;
}

 class AuthProvider extends React.Component<Props,InterfaceAuthContext>{
     setUser: (user:User|null) => void;

    constructor(props:Props){
        super(props)


        this.setUser = (user:User|null) => {
            this.setState({user})

        }

        this.state = { 
            user:null,
            setUser: this.setUser
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