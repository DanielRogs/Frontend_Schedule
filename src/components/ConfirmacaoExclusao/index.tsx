import React from "react";
import ExclModal from "../ExclModal";
import { Div } from "./styled";

class ConfirmacaoExclusao extends React.Component{
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        <Div>
            <ExclModal />
        </Div>
      </>
    );
  }
}

export default ConfirmacaoExclusao;
