import styled from "styled-components";
import fundo1 from '../../assets/Image/CadFooterFundo.jpg'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivFooter = styled.div`
    height: 30vw;

    @media (max-width: 851px) {
          height: 50vw;
      }
      
      @media (max-width: 455px) {
          height: 90vw;
      }
      
      @media (min-width: 1369px) {
          height: 39vw;
`

export const DivLogo = styled.div`
    margin: 12px 0px 0px 45px;
    display: flex;
    flex-direction: row;
`

export const Img = styled.img`
    margin-top: 20px;
    height: 55px;
    width: auto;
`

export const H2 = styled.h2`
    font-family: Oxygen, Century Gothic, Verdana;
    text-decoration: underline;
    text-decoration-color: #01C77F;
    font-weight: 500;
    font-size: 35px;
`

export const Footer = styled.footer`
    margin: -8px;
    background: url(${fundo1}) no-repeat;
    background-size: cover;
`