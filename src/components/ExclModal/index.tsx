import React from "react"
import { A, Div, DivAviso, DivButtons, DivImg, DivX, Img, Title } from "./styled"
import sair from "../../assets/Image/sairPreto.svg";
import { AiFillWarning } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Submit } from "../Button/styles";
import { isThisTypeNode } from "typescript";

interface Props{
    onClickYes: () => void;
    onClickNo: () => void;
    setModalVisible: (visible:boolean) => void;
    texto: string;
}

class ExclModal extends React.Component<Props>{
    constructor(Props: any) {
        super(Props)
    }

    render(): React.ReactNode {
        return (
            <Div>
                <DivX>
                    <A onClick={() => this.props.setModalVisible(false)}>
                        <Img src={sair} alt="fechar modal aviso" className="CloseModal"/>
                    </A>
                </DivX>

                <DivImg>
                    <IconContext.Provider value={{className: 'aviso'}}>
                        <AiFillWarning />
                    </IconContext.Provider>
                </DivImg>
                <DivAviso>
                    <Title>{this.props.texto}</Title>
                </DivAviso>
                <DivButtons>
                    <Submit color="green" Tletra={20} padding={50} onClick={() => {this.props.onClickYes(); this.props.setModalVisible(false)}}>Sim</Submit>
                    <Submit color="red" Tletra={20} padding={50} onClick={() => {this.props.onClickNo(); this.props.setModalVisible(false)}}>Não</Submit>
                </DivButtons>
            </Div>
        )
    }
}

export default ExclModal;
