import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #01C77F;
    width: 40vw;
    height: 20vw;
    padding: 15px;
    gap: 6%;
    position: relative;
    border-radius: 35px 6px 35px 35px;
`
        
export const HeadDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button{
        background: none;
        border: none;
    }
`

export const SubDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Tittle = styled.p`
    margin: 0;
    font-size: 1.2em;
    color: white;
    
    
    @media (max-width: 767px) {
        font-size: 1em;
    }
`

export const UserDiv = styled.div`
    width: 20em;
    display: flex;
    flex-direction: column;
    gap: 1.3em;
`

export const NomeInput = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', Century Gothic, Verdana; 
    background: #D9D9D9;;
    border-radius: 15px;
    padding: 1em;
    border: none;
    color: black;
    cursor: pointer;
    transition: 0.25s;
    font-size: 0.7em;

    &:focus{
        background: #129979;
        color: white;
    }
`

export const TelefoneInput = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', Century Gothic, Verdana; 
    background: #D9D9D9;;
    border-radius: 15px;
    padding: 1em;
    border: none;
    color: black;
    cursor: pointer;
    transition: 0.25s;
    font-size: 0.7em;

    &:focus{
        background: #129979;
        color: white;
    }
`

export const TelefoneFixo = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
        font-family: 'Oxygen', Century Gothic, Verdana; 
        background: #D9D9D9;;
        border-radius: 15px;
        padding: 1em;
        border: none;
        color: black;
        cursor: pointer;
        transition: 0.25s;
        font-size: 0.7em;

        &:focus{
            background: #129979;
            color: white;
        }
`

export const EmailInput = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
        font-family: 'Oxygen', Century Gothic, Verdana; 
        background: #D9D9D9;;
        border-radius: 15px;
        padding: 1em;
        border: none;
        color: black;
        cursor: pointer;
        transition: 0.25s;
        font-size: 0.7em;

        &:focus{
            background: #129979;
            color: white;
        }
`

export const UserDiv2 = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1em;

    .confirmButtom{
        align: right;
    }
`

export const Img = styled.img`
    height: 10em;
    width: auto;
    transition: 0.25s;

    @media (max-width: 767px) {
        height: 8em;
    }

    @media (max-width: 321px) {
        height: 4em;
    }
`

export const Img1 = styled.img`
    height: 2em;
    width: auto;
    cursor: pointer;
`

export const ButtonSub = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', Century Gothic, Verdana; 
    padding: 7px 2em 7px 2em;
    color: white;
    background: #01C77F;;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 0.8em;
    transition: 0.25s;

    &:hover{
        background: #129979;
        color: white;
    }
`

export const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', Century Gothic, Verdana; 
    padding: 7px 4em 7px 4em;
    color: white;
    background: black;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 0.6em;
    transition: 0.25s;
    position: absolute;
    margin-left: -0.5vw;
    margin-top: 2.5vh;
    widht: 100%;

    &:hover{
        background: #129979;
        color: white;
    }

    @media (max-width: 1286px){
        margin-top: 1vh;
        margin-left: -0.2vw;
    }

    @media (max-width: 725px){
        margin-top: 0.5vh;
        margin-left: 1vw;
    }

    @media (max-width: 563px){
        margin-top: 0vh;
        margin-left: 3vw;
    }
`