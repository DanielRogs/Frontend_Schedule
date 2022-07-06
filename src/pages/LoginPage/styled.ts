import styled from "styled-components";

interface Props {
    heightPx: number;
}

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    margin-bottom: 20vh;
`;

export const Title = styled.h1`
    font-size: 80px;
    font-weight: 400;
    text-decoration: underline;
    text-decoration-color: #01C77F;
    margin: 1rem 3rem 0 4rem;   
    padding: 0px;
`;

export const Img = styled.img<Props>`
    max-width: fit-content;
    height: ${(p) => p.heightPx}px;
`;

export const Section = styled.section`
    display: flex;
    height: 50vh;
    width: 100vw;
    justify-content: center;
    align-items: center;

    .agenda_img{
        height: 60vh;
    }
`;

export const Footer = styled.footer`
    display: flex;
    height: 5vh;
`;