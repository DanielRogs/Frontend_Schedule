import React from "react"
import { Submit } from "../Button/styles";
import { Div, Tittle, Input, P} from "./styled";
import { Link } from 'react-router-dom';

interface State{
    Email:string
    Senha:string
}

class LoginCard extends React.Component<{}, State>{
    constructor(Props: any) {
        super(Props)
        this.state = { Email: '', Senha: '' }
    }

    render(): React.ReactNode {
        return (
            <Div>
                <Tittle>Insira os seus dados:</Tittle>

                <form>

                    <Input
                        placeholder="E-mail"
                        type="email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ Email: e.target.value }) }} >
                    </Input>   
                    <Input
                        placeholder="Senha"
                        type="password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ Senha: e.target.value }) }}>
                    </Input>

                    <Submit color="#01C77F" Tletra={20} padding={0} className="button log">Entrar</Submit>

                    <P>ou</P>
                    
                </form>

                    <Link to='/cadastro'>
                        <Submit color="#129979" Tletra={20} padding={0} className="button cad">Cadastre-se</Submit>
                    </Link>

                

            </Div>

        )
    }


}

export default LoginCard;