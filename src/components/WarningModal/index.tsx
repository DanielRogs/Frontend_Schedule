import React from "react";
import { Div, Img, P, Title, DivExit, DivWarning, A } from "./styled";
import Sair from "../../assets/Image/sair.svg";
import { IconContext } from "react-icons";
import { IoWarningOutline } from "react-icons/io5";

interface Props {
  errorMensage: string;
  mensage: string;
  setWarningVisible: (visible:boolean) => void;
}

class WarningModal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Div>
        <DivExit>
          <A onClick={() => this.props.setWarningVisible(false)}>
            <Img heightPx={3} src={Sair} />
          </A>
        </DivExit>
        <DivWarning>
          <IconContext.Provider value={{ className: "warning-icon" }}>
            <IoWarningOutline title="icone de aviso de erro" />
          </IconContext.Provider>
          <Title>Atenção!</Title>
          <P>{this.props.errorMensage}</P>
          <P>{this.props.mensage}</P>
        </DivWarning>
      </Div>
    );
  }
}

export default WarningModal;
