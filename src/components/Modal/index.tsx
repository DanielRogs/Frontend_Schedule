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
import { addContact, getContactUser } from "../../services/contact";
import AuthContext from "../../context/AuthContext";


interface State {
    name: string;
    lastname: string;
    phone: string;
    email: string;
}

interface Props {
    modalIsVisible: boolean
    setVisible: (visible: boolean) => void
    setContacts:(contacts:Array<any>) => void 
}

class Modal extends React.Component<Props, State>{
    constructor(Props: any) {
        super(Props)
        this.handleClickCloseModal = this.handleClickCloseModal.bind(this);
        this.state = { name: '', lastname: '', phone: '', email: '' }
    }

    
    handleClickCloseModal() {
        this.props.setVisible(false)
      }
    

    render(): React.ReactNode {
        return (

            <>
            
                {this.props.modalIsVisible ? (
                    <Div>

                        <HeadDiv>
                            <Tittle>Adicionar Contato</Tittle>

                            <button onClick={this.handleClickCloseModal}>
                                <Img1 src={Close} />
                            </button>
                            
                        </HeadDiv>

                        <SubDiv>

                            <UserDiv>
                                <NomeInput
                                    placeholder="Nome"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ name: e.target.value }) }}
                                />

                                <TelefoneInput
                                    placeholder="Sobre nome"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ lastname: e.target.value }) }}
                                />

                                <TelefoneFixo
                                    placeholder="Telefeone Fixo"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ phone: e.target.value }) }}
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


                                <AuthContext.Consumer>
                                    {
                                        ({user}) =>(

                                            <div className="confirmButtom">
                                                <Button onClick={async () => {
                                                    await addContact(this.state.name, this.state.lastname, this.state.phone, this.state.email, user!._id)
                                                    this.props.setContacts(await getContactUser(user!._id))

                                                    }
                                                }>Confirmar</Button>
                                            </div>
                                        )
                                    }
                                </AuthContext.Consumer>


                                <div className="confirmButtom">
                                    <Button onClick={this.handleClickCloseModal}>Fechar</Button>
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