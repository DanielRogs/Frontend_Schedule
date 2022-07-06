import React from "react"
import { Submit } from "../Button/styles";
import { Div, Tittle, Input, P} from "./styled";


class LoginCard extends React.Component {
    constructor(Props: any) {
        super(Props)
    }

    render(): React.ReactNode {
        return (
            <Div>
                <Tittle>Insira os seus dados:</Tittle>

                <form>

                    <Input placeholder="E-mail" type="email"></Input>   
                    <Input placeholder="Senha" type="password"></Input>

                    <Submit color="#01C77F" Tletra={20} padding={0} className="button log">Entrar</Submit>

                    <P>ou</P>

                    <Submit color="#129979" Tletra={20} padding={0} className="button cad">Cadastre-se</Submit>

                </form>

            </Div>

        )
    }


}

export default LoginCard;