import React from "react";
import AuthContext from "../../context/AuthContext";
import { Header, Pesquisa } from "./styled";
import { AiOutlineSearch } from "react-icons/ai"
import { ButtonResponsivo } from "../Button/styles";


interface State {
    search: string;
}

class HeaderContactPage extends React.Component<{},State> {

    constructor(Props:any){
        super(Props)
        this.state = {search:""}
    }


    render(): React.ReactNode {
        return (

            <AuthContext.Consumer>
                {
                    ({ user }) => (
                        <Header>
                            <p>Bem vindo, {!!user ? user.name : "null"}</p>
                            <Pesquisa>
                                <input onChange={(e) => { this.setState({search: e.target.value}) }}
                                    type="text"
                                    placeholder="Buscar contato"
                                    value={this.state.search}
                                />
                                <AiOutlineSearch
                                    className="icone_pesquisa"
                                    title="lupa"
                                    color="#01C77F"
                                />

                            </Pesquisa>

                            <ButtonResponsivo
                                color="#01C77F"
                                Tletra={1.2}
                                padding={1.5}>
                                Adicionar Contato
                            </ButtonResponsivo>
                        </Header>
                    )
                }
            </AuthContext.Consumer>

        )


    }

}
export default HeaderContactPage