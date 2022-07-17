import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #01C77F;
    width: 40vw;
    height: 20vw;
    padding: 2em;
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
export const Tittle = styled.p`
    margin: 0;
    font-size: 1.2em;
    color: white;
    
    
    @media (max-width: 767px) {
        font-size: 1em;
    }
`

export const SubDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`



export const UserDiv = styled.div`
    width: 20em;
    display: flex;
    flex-direction: column;
    gap: 1.3em;
`

export const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', Century Gothic, Verdana; 
    background: #D9D9D9;;
    border-radius: 15px;
    padding: 1em;
    border: none;
    color: black;
    
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

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;


`

export const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', Century Gothic, Verdana; 
    padding: 0.75em 2em;
    color: white;
    background: black;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 0.75em;
    transition: 0.25s;

    &:hover{
        background: #129979;
        color: white;
    }

`