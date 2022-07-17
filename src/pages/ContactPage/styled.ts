
import styled from "styled-components";


export const DivTitle = styled.div`
    margin-left: 2.5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    height: 10em;

    img{
        height: 50%;
        width: auto;
        transform: rotate(-20deg);
    }
`

export const H2 = styled.h2`
    color: black;
    text-decoration: underline;
    text-decoration-color: #01C77F;
    font-weight: 500;
    font-size: 4.5rem;
`

export const DivContacts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10% 2.5%;

    
    width: 80vw;
    margin: 0 auto;

`

export const DivModal = styled.div`
    align: center;
    margin-top: 20px;
    display: flex;
    margin-left: 45vw;
    justify-content: center;
    position: absolute;
    z-index: 10;
    
`

export const DivModalEdit = styled.div`
    position: absolute;
    z-index: 9;
`