import React from "react"
import { Text, Input } from './styled'

interface Props {
    titulo:string
    tipo:string
}


class Cad_InputsNames extends React.Component<Props>{
    constructor(Props:any){
        super(Props)
    }

    render(): React.ReactNode {
        return (
            <>

                <Text TLetra={10}>{this.props.titulo}</Text>
                <Input fundo="#D9D9D9" raioBorda={50} fundoTransição="#129979" type={this.props.tipo}></Input>
                
            </>
        )
    }

    
}

export default Cad_InputsNames;