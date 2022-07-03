import React from 'react';
import { Button, Div, H1, Input } from './styled';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IconContext } from "react-icons";

class Cont_Page extends React.Component{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props:any){
        super(props)
    }

    

    render(): React.ReactNode {
        return (
            <>
                <IconContext.Provider value={{ size: "30" }}>
                    <AiOutlineArrowLeft />
                </IconContext.Provider>
                <form>
                    <Div>
                    <H1>Adicionar contato:</H1>
                        <br />
                        <Input placeholder='Nome do Contato' />
                        <br /><br /><br />
                        <Input placeholder='Telefone'/>
                        <br /><br /><br />
                        <Input placeholder='Telefone Fixo (Opcional)'/>
                        <br /><br /><br />
                        <Input placeholder='E-mail'/>
                        <br /><br /><br />
                        <Button type='submit'>Contirmar</Button>
                    </Div>
                </form>
            </>
        )
    }

}

export default Cont_Page;