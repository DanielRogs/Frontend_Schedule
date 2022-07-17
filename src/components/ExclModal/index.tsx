import React from "react"
import { A, Button, Div, DivAviso, DivButtons, DivImg, DivX, Img, Title } from "./styled"
import sair from "../../assets/Image/sairPreto.svg";
import { AiFillWarning } from "react-icons/ai";
import { IconContext } from "react-icons";


class ExclModal extends React.Component{
    constructor(Props: any) {
        super(Props)
    }

    render(): React.ReactNode {
        return (
            <Div>
                <DivX>
                    <A>
                        <Img src={sair} alt="fechar modal aviso" className="CloseModal"/>
                    </A>
                </DivX>

                <DivImg>
                    <IconContext.Provider value={{className: 'aviso'}}>
                        <AiFillWarning />
                    </IconContext.Provider>
                </DivImg>
                <DivAviso>
                    <Title>Tem certeza que deseja excluir o contato?</Title>
                </DivAviso>
                <DivButtons>
                    <Button>Confirmar</Button>
                </DivButtons>
            </Div>
        )
    }
}

export default ExclModal
