import React from "react";
import WarningModal from "../WarningModal";
import { Div } from "./styled";


interface State{
  warnIsVisible: boolean;
}
interface Props {
  callbackParentIsVisible: boolean;
  errorMensage: string;
  mensage: string;
}

class Warning extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {warnIsVisible: this.props.callbackParentIsVisible}
  } 

  setWarningVisible(visible: boolean) {
    this.setState({ warnIsVisible: visible })
  }

  render(): React.ReactNode {
    return (
      <>
        {this.state.warnIsVisible ?
          <Div>
            <WarningModal
              setWarningVisible={this.setWarningVisible.bind(this)}
              errorMensage={this.props.errorMensage}
              mensage={this.props.errorMensage} />
          </Div>
          : null}
      </>
    );
  }
}

export default Warning;
