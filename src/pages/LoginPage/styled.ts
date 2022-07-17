import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: 15vh;

    @media (max-width: 368px){
        .img-header{    
            display: none;
        }
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-size: 80px;
    font-weight: 400;
    text-decoration: underline;
    text-decoration-color: #01C77F;
    margin: 1rem 2rem 0 4rem;   
    padding: 0px;

    @media (max-height: 1080px) {
        font-size: 60px;
    }
    @media (max-width: 368px){
        margin: 0px;
    }
    
`;

export const Img = styled.img`
    max-width: 100%;
`;

export const Section = styled.section`
    display: flex;
    height: 55vh;
    padding-top: 10vh;
    justify-content: center;
    align-items: center;

    .agenda_img{
        height: 60vh;
    }


    @media (max-width: 768px) {
        .agenda_img{
            height: 40vh; 
        }
    }

    @media (max-width: 583px) {
        .agenda_img{
            height: 30vh; 
        }
    }

    @media (max-width: 450px) {
        .agenda_img{
            height: 20vh; 
        }
    }

    @media (max-width: 368px) {
        .agenda_img{
           height: 0vh; 
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    height: 20vh;
`;