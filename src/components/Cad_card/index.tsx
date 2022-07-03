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

interface Props {

}

interface States {

}

class Cad_Card extends React.Component<Props, States>{
    constructor(Props:any){
        super(Props)
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
                            <Cad_InputsNames titulo="Email:" tipo="email"/>

                            <Cad_InputsNames titulo="Senha:" tipo="password"/>

                            <Cad_InputsNames titulo="Confirme a senha:" tipo="password"/>
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