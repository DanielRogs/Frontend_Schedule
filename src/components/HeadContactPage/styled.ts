import styled from "styled-components";


export const Header = styled.head`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    background-color: #01C77F;
    color: black;

    p{
    font-size: 1.3em;
    color: white;
    }

`

export const Pesquisa = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    width: 50%;
    height: 2em;
    border-radius: 15px;
    padding: 1%;

    input{
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        font-size: 1.2em;
    }

    .icone_pesquisa{
        font-size: 1.2em;

        @media (min-width: 768px) {
            font-size: 2em;
        }

        @media (min-width: 320px) {
            font-size: 3em;   
        }
    }


`