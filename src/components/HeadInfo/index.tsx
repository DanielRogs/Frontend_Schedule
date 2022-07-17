import React from "react";
import {
        Div,
        LogoDiv,
        Img,
        Logo,
        DescButton,
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
                    
                    <div>
                        <DescButton>Adicionar Contato</DescButton>
                    </div>
                </Div>
            
            </>

        )
    }


}

export default HeadInfo;