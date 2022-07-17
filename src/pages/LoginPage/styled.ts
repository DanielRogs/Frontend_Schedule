import styled from "styled-components";

interface Props {
    heightPx: number;
}

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: 15vh;
    margin-bottom: 8vw;
`;

export const Title = styled.h1`
    font-size: 80px;
    font-weight: 400;
    text-decoration: underline;
    text-decoration-color: #01C77F;
    margin: 1rem 3rem 0 4rem;   
    padding: 0px;

    @media (max-height: 1080px) {
        font-size: 60px;
    }
`;

export const Img = styled.img<Props>`
    max-width: fit-content;
    height: ${(p) => p.heightPx}vw;

    @media (max-width: 1075px) {
        height: 90px;
    }
`;

export const Section = styled.section`
    display: flex;
    height: 50vh;
    width: 100%;
    justify-content: center;
    align-items: center;

    .agenda_img{
        height: 60vh;
    }

    @media (max-width: 809px) {
        .agenda_img{
           height: 50vh; 
        }
    }

    @media (max-width: 683px) {
        .agenda_img{
            height: 40vh; 
        }
    }

    @media (max-width: 627px) {
        .agenda_img{
           height: 0vh; 
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;   

    @media (max-width: 1151px) {
        Img{
            height: 30vh;
        }
    }

    @media (max-width: 671px) {
        Img{
            height: 35vh;
        }
    }
`;