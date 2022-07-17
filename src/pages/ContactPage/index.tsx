import React from "react"
import HeaderContactPage from "../../components/HeadContactPage";
import Logo from '../../assets/Image/logo.svg'
import { Link } from 'react-router-dom';
import {
    DivTitle,
    H2,
    DivContacts,
    DivModal,
} from './styled'
import MainCard from "../../components/MainCard";
import AuthContext from "../../context/AuthContext";
import Modal from "../../components/Modal";
import {getContactUser} from '../../services/contact'

interface Contact {
    id: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;

}
interface State {
    contacts: Array<Contact>
    modalIsVisible: boolean
}



class ContactPage extends React.Component<{}, State>{

 // static contextType = AuthContext;
 // declare context: React.ContextType<typeof AuthContext>

    constructor(Props: any) {
        super(Props)

        this.state = {modalIsVisible: false, contacts: []}
    }

    setModalVisible (visible: boolean) {
        this.setState({modalIsVisible : visible})

    }

    


    RenderContacts(contacts: Array<Contact>) {
        const listContacts = contacts.map((contact) =>
            <MainCard
                key={contact.id}
                name={contact.name + " " + contact.lastname}
                phone={"("+contact.phone.slice(0,2)+")"+" "+contact.phone.slice(2,7)+"-"+contact.phone.slice(7,11)}
            />
        );
        
        return(
            <>
            {listContacts}
            </>
        );
    }

    setContacts(contacts:Array<Contact>){
        this.setState({contacts})

    }

//async componentDidMount () {
//    const {user} = this.context
//    this.setContacts(await getContactUser(user!._id))
//    
//}




    render(): React.ReactNode {
        return (
            <>

                <HeaderContactPage setContacts={this.setContacts.bind(this)} setVisible={this.setModalVisible.bind(this)}/>
    
                <DivModal>
                    <Modal modalIsVisible={this.state.modalIsVisible} setVisible={this.setModalVisible.bind(this)}/>
                </DivModal>

                <DivTitle>
                    <img src={Logo} alt="Logo Schedule" />
                    <H2>Schedule</H2>
                </DivTitle>

                <DivContacts>
                    {this.RenderContacts(this.state.contacts)}
                </DivContacts>

            </>
        )
    }
}

export default ContactPage;