import React from "react";
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
    
}

class ModalEdit extends React.Component<Props, State>{
    constructor(Props: any) {
        super(Props)
        this.state = { nome: '', telefone: '', telefonefixo: '', email: '' }
    }

    

    render(): React.ReactNode {
        return (

            <>
            
                    <Div>

                        <HeadDiv>
                            <Tittle>Editar Contato:</Tittle>

                            <button>
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
                                    <ButtonSub>Alterar Imagem</ButtonSub>
                                </div>
                                <div className="confirmButtom">
                                    <Button>Alterar</Button>
                                </div>
                            </UserDiv2>  

                        </SubDiv>
                    

                    </Div>

            </>

        )
    }


}

export default ModalEdit;