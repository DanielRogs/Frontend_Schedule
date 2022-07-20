import React from "react"

import {
    Div,
    DivV,
    DivTellT,
    Text,
    TextInfo,
    DivTellH,
    DivEmailT
} from './styled';


interface Props {
    telefone:string
    telefonefixo:string
    email:string
}

class FooterInfo extends React.Component<Props>{
    constructor(Props: any) {
        super(Props)
    }

    render(): React.ReactNode {
        return (
            <Div>

                <DivV>

                    <div>
                        <DivTellT>
                            <Text>Telefone:</Text>
                        </DivTellT>
                        <TextInfo>
                            {this.props.telefone}
                        </TextInfo>
                    </div>

                    <div>
                        <DivTellH>
                            <Text>Telefone Fixo:</Text>
                        </DivTellH>
                        <TextInfo>
                             {this.props.telefonefixo}
                        </TextInfo>
                    </div>

                </DivV>


                <div>

                    <DivEmailT>
                        <Text>E-mail:</Text>
                    </DivEmailT>
                    <TextInfo>
                        {this.props.email}
                    </TextInfo>

                </div>

            </Div>
        )
    }


}

export default FooterInfo;