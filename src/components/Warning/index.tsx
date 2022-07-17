import React from "react";
import WarningModal from "../WarningModal";
import { Div } from "./styled";


interface State {
  handleWarning: Function;
  warnIsVisible: boolean;
}

class Warning extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        {this.state.warnIsVisible ?
        <Div>
          <WarningModal closeWarning={this.state.handleWarning()} errorMensage="" mensage="" />
        </Div>
        : null}
      </>
    );
  }
}

export default Warning;
