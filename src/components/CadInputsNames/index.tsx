import React from "react"
import { Text, Input } from './styled'

interface Props {
    titulo:string
    tipo:string
    value:string
    onChange:any
}


class CadInputsNames extends React.Component<Props>{
    constructor(Props:Props){
        super(Props)
    }

    render(): React.ReactNode {
        return (
            <>

                <Text TLetra={10}>{this.props.titulo}</Text>
                <Input fundo="#D9D9D9" raioBorda={50} fundoTransição="#129979" type={this.props.tipo} value={this.props.value} onChange={this.props.onChange}></Input>
                
            </>
        )
    }

    
}

export default CadInputsNames;