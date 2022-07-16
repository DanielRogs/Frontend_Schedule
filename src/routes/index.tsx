import React from "react";
import {Route, Routes } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import CadPage from "../pages/Cad_Page";
import AuthContext from "../context/AuthContext";
import { InterfaceAuthContext } from "../context/AuthContext";

export default class AppRoutes extends React.Component{

    static contextType = AuthContext
    //declare context: React.ContextType<typeof AuthContext>
 
    userNotLoggedRoutes = ( 
             <Routes>
                <Route path="/*" element={<LoginPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/cadastro" element={<CadPage/>} />
           </Routes>
    )

    userLogged = (
                 <AuthContext.Consumer>
                     {
                    ({user}) => (
                    <Routes>
                        <Route path="*" element={<h1>Bem vindo, {!! user ? user.name:"null"} !!!</h1>} />
                    </Routes>
                    )
                     }
                 </AuthContext.Consumer>
    )


    render(){
        const user= this.context

        return(
            <AuthContext.Consumer>
                {
                    ({user}) =>(
                        !!user ? this.userLogged:this.userNotLoggedRoutes
                    )
                }
            </AuthContext.Consumer>
            
        )

    }

}