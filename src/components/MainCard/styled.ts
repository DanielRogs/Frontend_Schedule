import styled from "styled-components";

export const Div = styled.div`
    background-color: #D9D9D9;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 30%;

    @media (min-width: 768px){
        width: 20%;
    }
    box-shadow: 0px -0.75em #129979;
    border-radius: 2em;
    padding: 2% 3%;
    margin-bottom: 5%;
`

export const DivTop = styled.div` 
    display: flex;
    justify-content: space-between;

`

export const DivImg = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin: 0 5%;
    padding: 0.5em;

`

export const DivFigures = styled.div`
    display: flex;
    gap: 20%;
    align-items: flex-start;
    width: 20%

    button{
        background: none;
        border: none;
    }
`

export const DivBottom = styled.div`
`

export const Text = styled.p`
    font-size: 1.5em;
    font-family: Century Gothic, Verdana, Arial;
`

export const Img = styled.img`
    max-width: 100%;
`

export const ImgFig = styled.img`
    max-width: 50%;  
    cursor: pointer;
`