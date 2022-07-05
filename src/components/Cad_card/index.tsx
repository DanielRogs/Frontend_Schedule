/* eslint-disable react/jsx-pascal-case */
import React from "react"
import { Submit } from "../Button/styles";
import Cad_InputsNames from "../Cad_InputsNames";
import {  
            Tittle,
            Div, 
            DivTittle, 
            DivButton,
            DivInput
        } from "./styled";


interface State {
    Email:string;
    Senha:string;
    ConfSenha:string;
}

class Cad_Card extends React.Component<{},State>{
    constructor(Props:any){
        super(Props)
        this.state = { Email:'', Senha:'', ConfSenha:'' }
    }

    render(): React.ReactNode {
        return (
            <>

                <Div>

                    <form>

                        <DivTittle>
                            <Tittle>Cadastro</Tittle>
                        </DivTittle>

                        <DivInput>
                            <Cad_InputsNames titulo="Email:" tipo="email" value={this.state.Email} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {this.setState({Email:e.target.value})}} />

                            <Cad_InputsNames titulo="Senha:" tipo="password" value={this.state.Senha} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {this.setState({Senha:e.target.value})}} />

                            <Cad_InputsNames titulo="Confirme a senha:" tipo="password" value={this.state.ConfSenha} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {this.setState({ConfSenha:e.target.value})}} />
                        </DivInput>

                        <DivButton>
                            <Submit color="#01C77F" Tletra={15} padding={30} type="submit">Registrar</Submit>
                        </DivButton>

                    </form>


                </Div>

                
            </>
        )
    }

    
}

export default Cad_Card;