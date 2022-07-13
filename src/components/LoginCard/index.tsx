import React from "react"
import { Submit } from "../Button/styles"
import { Div, Tittle, Input, P} from "./styled"
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

interface State{
    email:string
    password:string
}

class LoginCard extends React.Component<{}, State>{
    constructor(Props: any) {
        super(Props)
        this.state = { email: '', password: '' }
    }

    render(): React.ReactNode {
        return (
            <Div>
                <Tittle>Insira os seus dados:</Tittle>

                <form>

                    <Input
                        placeholder="E-mail"
                        type="email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }} >
                    </Input>   
                    <Input
                        placeholder="Senha"
                        type="password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ password: e.target.value }) }}>
                    </Input>

                    <AuthContext.Consumer>
                        {
                            ({login}) =>(
                                <Submit onClick={() => (login(this.state.email, this.state.password))} color="#01C77F" Tletra={20} padding={0} className="button log">Entrar</Submit>
                            )
                        }
                    </AuthContext.Consumer>

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