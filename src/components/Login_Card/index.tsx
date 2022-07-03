import React from "react"
import { Submit } from "../Button/styles";
import { Div, Tittle, Input, P, Br } from "./styled";


class Login_Card extends React.Component{
    constructor(Props:any){
        super(Props)
    }

    render(): React.ReactNode {
        return (
            <>

                <Div>
                    <Tittle>Insira os seus dados:</Tittle>

                    <form>

                        <Input placeholder="E-mail" type="email"></Input><Br />
                        <Input placeholder="Senha" type="password"></Input><Br />

                        <Submit color="#01C77F" Tletra={15} padding={55} className="Button_class">Entrar</Submit>

                        <P>Ou</P>

                            <Submit color="#129979" Tletra={11} padding={20} className="Button2_class">Cadastre-se Aqui</Submit>

                    </form>

                    

                </Div>
                
            </>
        )
    }

    
}

export default Login_Card;