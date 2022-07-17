import React from "react";
import {
        Div,
        LogoDiv,
        Img,
        Logo,
        AddContDiv,
        Desc,
        } from "./styled";
import LogoAg from '../../assets/Image/logo.svg'



class HeadInfo extends React.Component{
    constructor(Props: any) {
        super(Props)
    }

    render(): React.ReactNode {
        return (

            <>
            
                <Div>
                    <LogoDiv>
                        <Img src={LogoAg}/> <Logo>Schedule</Logo>
                    </LogoDiv>
                    
                    <AddContDiv>
                        <Desc>Adicionar Contato</Desc>
                    </AddContDiv>
                </Div>
            
            </>

        )
    }


}

export default HeadInfo;