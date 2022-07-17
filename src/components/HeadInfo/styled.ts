import styled from "styled-components";

export const Div = styled.div`
    font-family: 'Oxygen', Century Gothic;
    background-color: #01C77F;
    display: flex;
    flex-direction: row;
    height: 57px;
    gap: 66%;
    align-items: center;
    margin: 0;
 `

export const LogoDiv = styled.div`
    display: flex;
    flex-direciton: row;
    gap: 10%;
    margin-left: 5vh;
`

export const Img = styled.img`
    width: 39px;
    height: 44.99px;
    margin-top: 15%;
`

export const Logo = styled.p`
    font-weight: 400;
    font-size: 32px;
    text-decoration: underline;
    text-decoration-color: white;
`

export const DescButton = styled.button`
    background: #01C77F;
    border-radius: 5px;
    padding: 10px 2em 10px 2em;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.25s;
    font-size: 20px;

&:hover{
    background: #129979;
    color: black;
}
`