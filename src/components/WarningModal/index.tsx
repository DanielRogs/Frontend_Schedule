import React from "react";
import { Div, Img, P, Title } from "./styled";
import Sair from '../../assets/Image/sair.svg';

class WarningModal extends React.Component{
    constructor(Props: any) {
        super(Props)

    }

    render(): React.ReactNode {
        return (
            <Div>
                <Img heightPx={3} src={Sair} />
                <Title>Aviso!</Title>
                <P>asfklshfhlsk</P>
                
            </Div>
        )
    }
}

export default WarningModal;