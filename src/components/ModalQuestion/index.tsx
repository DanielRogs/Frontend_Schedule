import React from "react";
import { Submit } from "../Button/styles";
import {ModalBackground, A, Div, DivAviso, DivButtons, DivImg, DivX, Img, Title } from "./styled"
import { AiFillWarning } from "react-icons/ai";
import { IconContext } from "react-icons";
import sair from "../../assets/Image/sairPreto.svg";


interface Props{
  modalVisible: boolean;
  setVisible: (visible : boolean) => void;
  onClickYes: () => void;
  onClickNo: () => void;
  texto: string;
}



class ModalQuestion extends React.Component<Props>{
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        { this.props.modalVisible ? 
        <ModalBackground>
            <Div>
                <DivX>
                    <A onClick={() => this.props.setVisible(false)}>
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
                    <Submit color="green" Tletra={20} padding={50} onClick={() => {this.props.onClickYes(); this.props.setVisible(false)}}>Sim</Submit>
                    <Submit color="red" Tletra={20} padding={50} onClick={() => {this.props.onClickNo(); this.props.setVisible(false)}}>Não</Submit>
                </DivButtons>
            </Div>
        </ModalBackground>
        :null}
        
      </>
    );
  }
}

export default ModalQuestion;
