import styled from "styled-components";

interface Props{
    heightPx: number;
}

export const Div = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    margin-top: -20vh;
    left: 50%;
    margin-left: -20vw;
    background-color: #01C77F;
    height: 40vh;
    width: 40vw;
    border-radius: 5px;
`

export const Title = styled.h2`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: -8px;
    margin-top: -3vh;
`

export const Img = styled.img<Props>`
    max-width: fit-content;
    height: ${(p) => p.heightPx}vh;
    position: relative;
    margin-top: 8px;
    margin-left: 8px;

`

export const P = styled.p`

`