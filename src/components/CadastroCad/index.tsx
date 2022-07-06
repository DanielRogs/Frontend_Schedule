/* eslint-disable react/jsx-pascal-case */
import React from "react"
import { Submit } from "../Button/styles";
import CadInputsNames from "../CadInputsNames";
import {
    Tittle,
    Div,
    DivTittle,
    DivButton,
    DivInput
} from "./styled";


interface State {
    Email: string;
    Senha: string;
    ConfSenha: string;
}

class CadastroCard extends React.Component<{}, State>{
    constructor(Props: any) {
        super(Props)
        this.state = { Email: '', Senha: '', ConfSenha: '' }
    }

    render(): React.ReactNode {
        return (
            <Div>
                    <DivTittle>
                        <Tittle>Cadastro</Tittle>
                    </DivTittle>
                    <form>
                        <DivInput>
                            <CadInputsNames
                                titulo="Email:"
                                tipo="email"
                                value={this.state.Email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ Email: e.target.value }) }} />

                            <CadInputsNames
                                titulo="Senha:"
                                tipo="password"
                                value={this.state.Senha}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ Senha: e.target.value }) }} />

                            <CadInputsNames
                                titulo="Confirme a senha:"
                                tipo="password"
                                value={this.state.ConfSenha}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ ConfSenha: e.target.value }) }} />
                        </DivInput>

                        <DivButton>
                            <Submit color="#01C77F" padding={20} Tletra={15} type='submit'>Cadastrar</Submit>
                        </DivButton>
                    </form>
            </Div>

            


        )
    }


}

export default CadastroCard;