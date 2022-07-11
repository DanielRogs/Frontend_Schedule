import React, { createContext } from 'react';
import AuthContext, { InterfaceAuthContext } from './AuthContext';
import api from '../services/api';
interface Props{
    children: JSX.Element;
}

 class AuthProvider extends React.Component<Props,InterfaceAuthContext >{

    constructor(props:Props){
        super(props)

        this.state = { 
            login :async (email:string, password:string) =>{
            try{
                const res = await api.post('/login', {email,password})
                alert(Object.keys(res.data.user))
            }catch(err){
                alert(err)
            }
            
            },

            user: null

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