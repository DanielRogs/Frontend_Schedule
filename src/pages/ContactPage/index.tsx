import React from "react"
import HeaderContactPage from "../../components/HeadContactPage";


interface State {
    
}

class ContactPage extends React.Component<{}, State>{
    constructor(Props: any) {
        super(Props)
    }

  

    render(): React.ReactNode {
        return (
            <HeaderContactPage />


        )
    }
}

export default ContactPage;