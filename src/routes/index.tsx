import React from "react";
import {Route, Routes } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import CadPage from "../pages/Cad_Page";
import AuthContext from "../context/AuthContext";
import ContactPage from "../pages/ContactPage";

export default class AppRoutes extends React.Component{
 
    userNotLoggedRoutes = ( 

             <Routes>
                <Route path="/*" element={<LoginPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/cadastro" element={<CadPage/>} />
           </Routes>
    )

    userLogged = (
             <Routes>
                <Route path="/*" element={<ContactPage/>} />
           </Routes>
    )


    render(){

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