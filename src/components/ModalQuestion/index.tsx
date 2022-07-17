import React from "react";
import ExclModal from "../ExclModal";
import { Div } from "./styled";

interface Props{
  modalVisible: boolean;
  setModalVisible: (visible : boolean) => void;
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
        <Div>
          <ExclModal texto={this.props.texto} setModalVisible = {this.props.setModalVisible} onClickYes={this.props.onClickYes} onClickNo={this.props.onClickNo}/>
        </Div>
        :null}
        
      </>
    );
  }
}

export default ModalQuestion;
