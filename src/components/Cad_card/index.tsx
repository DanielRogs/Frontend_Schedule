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
                            <Cad_InputsNames titulo="Email:"/>

                            <Cad_InputsNames titulo="Senha:"/>

                            <Cad_InputsNames titulo="Confirme a senha:"/>
                        </DivInput>

                        <DivButton>
                            <Submit color="#01C77F">Registrar</Submit>
                        </DivButton>

                    </form>


                </Div>

                
            </>
        )
    }

    
}

export default Cad_Card;