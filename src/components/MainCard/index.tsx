import React from "react";
import {
    Div,
    DivTop,
    DivImg,
    DivFigures,
    DivBottom,
    ImgFig,
    Text,
    Img,

} from './styled'
import Perfil from '../../assets/Image/PerfilElipse.svg';
import Lixo from '../../assets/Image/lixo.svg';
import Lapis from '../../assets/Image/lapis.svg';
import ModalQuestion from "../ModalQuestion";
import { deleteContact, getContactUser } from "../../services/contact";
import { wait } from "@testing-library/user-event/dist/utils";
import { Contact } from "../../pages/ContactPage";
import AuthContext from "../../context/AuthContext";


interface Props {
    name: string;
    phone: string;
    contactId :string;
    setContacts: (contacts: Array<Contact>) => void
}

interface State{
    modalQuestionVisible:boolean

}


class MainCard extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)

        this.state = { modalQuestionVisible:false}


    }
    modalQuestionVisible(visible:boolean){
        this.setState({modalQuestionVisible:visible})

    }

   async deletecard(userId:string){
      await deleteContact(this.props.contactId)
      this.props.setContacts( await getContactUser(userId))


    }

    render(): React.ReactNode {
        return (
            <>
            <AuthContext.Consumer>
                {
                    ({user}) =>(
                        <ModalQuestion modalVisible={this.state.modalQuestionVisible} onClickNo={() => {} } onClickYes={ async() => { this.deletecard(user!._id)} } setVisible={this.modalQuestionVisible.bind(this)}  texto={"Tem certeza que deseja apaga esse contato ?"}/>
                    )
                }
            </AuthContext.Consumer>
            
            <Div>
                <DivTop>
                    <DivImg>
                        <Img src={Perfil} alt="foto de perfil do contato" />
                    </DivImg>
                    <DivFigures>
                        <ImgFig src={Lapis} alt="Figura de lapis" />
                        <ImgFig src={Lixo} alt="Figura de lixeira" onClick={() =>{ this.setState({modalQuestionVisible:true}) }}/>
                    </DivFigures>
                </DivTop>
                <DivBottom>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.phone}</Text>
                </DivBottom>
            </Div>
            </>

        )
    }


}

export default MainCard;