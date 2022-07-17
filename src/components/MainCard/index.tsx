import React from "react";
import {
    Div,
    DivTop,
    DivImg,
    DivFigures,
    DivBottom,
    ImgFig,
    Text,
    Img,

} from './styled'
import Perfil from '../../assets/Image/PerfilElipse.svg';
import Lixo from '../../assets/Image/lixo.svg';
import Lapis from '../../assets/Image/lapis.svg';

interface Props {
    name: string;
    phone: string;
}


class MainCard extends React.Component<Props>{
    constructor(props: Props) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Div>
                <DivTop>
                    <DivImg>
                        <Img src={Perfil} alt="foto de perfil do contato" />
                    </DivImg>
                    <DivFigures>
                        <ImgFig src={Lapis} alt="Figura de lapis" />
                        <ImgFig src={Lixo} alt="Figura de lixeira" />
                    </DivFigures>
                </DivTop>
                <DivBottom>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.phone}</Text>
                </DivBottom>
            </Div>

        )
    }


}

export default MainCard;