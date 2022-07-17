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
    constructor(Props: any) {
        super(Props)
        this.state = {
            contacts:
                [
                    { id: '1', name: "Alex", lastname: "Fernandes", phone: "61999999999", email: "alex@gmail.com" },
                    { id: '2', name: "Julia", lastname: "Guimarães", phone: "61985200547", email: "jujudopix@hotmail.com" },
                    { id: '3asd21', name: "Cleber", lastname: "Flamengo", phone: "779980009999", email: "clebinhoplays@gmail.com" },
                    { id: 'a122ds21%%$', name: "Claudia", lastname: "Fernando", phone: "61988550020", email: "pepeenenem100@orkut.com" }
                ]
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




    render(): React.ReactNode {
        return (
            <>
                <HeaderContactPage />
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