import React from "react";
import { Submit } from "../Button/styles";
import {
        Div,
        HeadDiv,
        Tittle,
        UserDiv,
        NomeInput,
        TelefoneInput,
        TelefoneFixo,
        EmailInput,
        UserDiv2,
        Img,
        Img1,
        Button,
        SubDiv,
        ButtonSub
        } from './styled';
import Perfil from '../../assets/Image/PerfilElipse.svg'
import Close from '../../assets/Image/x.svg'

interface State {
    nome: string;
    telefone: string;
    telefonefixo: string;
    email: string;
}

interface Props {
    modalIsVisible: boolean
    setVisible: (visible: boolean) => void
}

class Modal extends React.Component<Props, State>{
    constructor(Props: any) {
        super(Props)
        this.handleClick = this.handleClick.bind(this);
        this.state = { nome: '', telefone: '', telefonefixo: '', email: '' }
    }

    
    handleClick() {
        this.props.setVisible(false)
      }
    

    render(): React.ReactNode {
        return (

            <>
            
                {this.props.modalIsVisible ? (
                    <Div>

                        <HeadDiv>
                            <Tittle>Adicionar Contato</Tittle>

                            <button onClick={this.handleClick}>
                                <Img1 src={Close} />
                            </button>
                            
                        </HeadDiv>

                        <SubDiv>

                            <UserDiv>
                                <NomeInput
                                    placeholder="Nome"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ nome: e.target.value }) }}
                                />

                                <TelefoneInput
                                    placeholder="Telefone"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ telefone: e.target.value }) }}
                                />

                                <TelefoneFixo
                                    placeholder="Telefeone Fixo"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ telefonefixo: e.target.value }) }}
                                />

                                <EmailInput 
                                    placeholder="Email"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }}
                                />

                            </UserDiv>

                            <UserDiv2>
                                <div>
                                    <Img src={Perfil}/>
                                </div>
                                <div>
                                    <ButtonSub>Adicionar imagem</ButtonSub>
                                </div>
                                <div className="confirmButtom">
                                    <Button onClick={this.handleClick}>Confirmar</Button>
                                </div>
                            </UserDiv2>  

                        </SubDiv>
                    

                    </Div>
                ) :
                    null
                }


            </>

        )
    }


}

export default Modal;