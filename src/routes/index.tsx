import React from "react";
import {Route, Routes } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import CadPage from "../pages/Cad_Page";

export default class AppRoutes extends React.Component{

    
    userNotLoggedRoutes = ( 
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/cadastro" element={<CadPage/>} />
           </Routes>
    )

    userRoutes = {

    }


    render(){
        return(
            this.userNotLoggedRoutes
        )

    }

}