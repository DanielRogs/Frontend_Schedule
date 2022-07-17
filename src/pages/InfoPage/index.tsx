import React from "react"
import {
    Div,
    ImageDiv,
    Img,
    TextoDiv,
    DivNav,
    DivBody,
    DivFooter
    } from "./styled";
import HeadInfo from "../../components/HeadInfo";
import FooterInfo from "../../components/FooterInfo";
import LogoMid from '../../assets/Image/PerfilElipse2.svg'


function InfoPage() {
    return (
        <>
            <Div>

                <DivNav>
                    <HeadInfo />
                </DivNav>
                
                <DivBody>
                    <ImageDiv>
                        <Img src={LogoMid} />
                    </ImageDiv>

                    <TextoDiv>              
                        Alex Fernandes
                    </TextoDiv>
                </DivBody>
                
                <DivFooter>
                    <FooterInfo telefone={""} telefonefixo={""} email={""} />
                </DivFooter>
                

            </Div>
        </>
    );
  }
  
  export default InfoPage;