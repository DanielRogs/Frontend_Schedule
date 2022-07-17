import React from "react";
import { Submit } from "../Button/styles";
import {
    Div,
    HeadDiv,
    Tittle,
    UserDiv,
    Input,
    UserDiv2,
    Img,
    Img1,
    Button,
    SubDiv,
    ButtonSub,
    ButtonDiv
} from './styled';
import Perfil from '../../assets/Image/PerfilElipse.svg'
import Close from '../../assets/Image/x.svg'
import { addContact, getContactUser } from "../../services/contact";
import AuthContext from "../../context/AuthContext";


interface Contact {
    id: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;

}

interface State {
    name: string;
    lastname: string;
    phone: string;
    email: string;
}

interface Props {
    modalIsVisible: boolean
    setVisible: (visible: boolean) => void
    setContacts: (contacts: Array<Contact>) => void
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
                                <Input
                                    placeholder="Nome"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ name: e.target.value }) }}
                                />

                                <Input
                                    placeholder="Sobrenome"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ lastname: e.target.value }) }}
                                />

                                <Input
                                    placeholder="Telefone"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ phone: e.target.value }) }}
                                />

                                <Input
                                    placeholder="Email"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }}
                                />

                            </UserDiv>

                            <UserDiv2>
                                <div>
                                    <Img src={Perfil} />
                                </div>
                                <div>
                                    <ButtonSub>Adicionar imagem</ButtonSub>
                                </div>
                            </UserDiv2>
                        </SubDiv>

                        <ButtonDiv>
                            <AuthContext.Consumer>
                                {
                                    ({ user }) => (
                                        <Button onClick={async () => {
                                            await addContact(this.state.name, this.state.lastname, this.state.phone, this.state.email, user!._id)
                                            this.props.setContacts(await getContactUser(user!._id))

                                        }
                                        }>Confirmar</Button>
                                    )
                                }
                            </AuthContext.Consumer>
                        
                        </ButtonDiv>





                    </Div>
                ) :
                    null
                }


            </>

        )
    }


}

export default Modal;