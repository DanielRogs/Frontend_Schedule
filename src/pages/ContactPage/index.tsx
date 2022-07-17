import React from "react"
import HeaderContactPage from "../../components/HeadContactPage";
import Logo from '../../assets/Image/logo.svg'
import { Link } from 'react-router-dom';
import {
    DivTitle,
    H2,
    DivContacts
} from './styled'
import MainCard from "../../components/MainCard";
import AuthContext from "../../context/AuthContext";

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
}



class ContactPage extends React.Component<{}, State>{

 // static contextType = AuthContext;
 // declare context: React.ContextType<typeof AuthContext>

    constructor(Props: any) {
        super(Props)
        this.state = {
            contacts:[]
        }
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
                <HeaderContactPage setContacts={this.setContacts.bind(this)} />
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