import styled, { StyleSheetManager } from "styled-components";

interface Props{
    heightPx: number;
}

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #C61F1F;

    width: 40vw;
    
    @media (max-width: 368px){
        width: 80vw;
    }
    
    border-radius: 5px;
    color: white;
`

export const DivExit = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-top: 10px;
    color: white;
`

export const DivWarning = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .warning-icon{
        font-size: 3em;
    }

`

export const Title = styled.h2`

`

export const Img = styled.img<Props>`
    max-width: fit-content;
    height: ${(p) => p.heightPx}vh;
`
export const A = styled.a`
    cursor: pointer;
`

export const P = styled.p`
`