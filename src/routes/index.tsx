import React from "react";
import {Route, Routes } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import CadPage from "../pages/Cad_Page";
import AuthContext from "../context/AuthContext";
import { InterfaceAuthContext } from "../context/AuthContext";

export default class AppRoutes extends React.Component{

    static contextType = AuthContext
    declare context: React.ContextType<typeof AuthContext>
 
    userNotLoggedRoutes = ( 
             <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/cadastro" element={<CadPage/>} />
           </Routes>
    )

    userRoutes = (
             <Routes>
                <Route path="/" element={<h1>Bem vindo</h1>} />
           </Routes>
    )


    render(){
        const {user}= this.context

        return(
            <h1>{!!user ? user.name :"vazio"}</h1>
            
        )

    }

}