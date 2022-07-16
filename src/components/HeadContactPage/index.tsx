import React from "react";
import AuthContext from "../../context/AuthContext";
import { Header } from "./styled";
import { AiOutlineSearch } from "react-icons/ai"
import { Submit } from "../Button/styles";


class HeaderContactPage extends React.Component{


    render() :React.ReactNode {
        return (
            
            <AuthContext.Consumer>
                {
                    ({user}) =>(
                        <Header>
                             <p>Bem vindo, {!!user ? user.name: "null"}</p> 
                             <div>
                                <input type="text" placeholder="Buscar contato"></input>
                                <AiOutlineSearch/>
                             </div>
                             
                             <Submit>Adicionar Contado</Submit>
                        </Header>
                    )
                }
            </AuthContext.Consumer>

        )

        
    }

}
export default HeaderContactPage