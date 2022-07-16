import styled from "styled-components";

export const Div = styled.div`
    border: solid 1.5px #01C77F;
    border-radius: 25px;
    margin: 20px 50px 50px 50px;
    padding: 0px;
    text-align: center;
`;

export const DivTittle = styled.div`
    background: white;
    height: auto;
    width: 150px;
    text-align: center;
    margin: 0 auto;
`;

export const DivInput = styled.div`
    width: 450px;
    margin: 0 auto;
    margin-top: 35px;

    @media (max-width: 620px) {
        width: 250px;
    }

    @media (max-width: 411px) {
        width: 150px;
    }
`

export const DivButton = styled.div`
    margin: 45px 0px 30px 0px;
`;

export const Tittle = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: Oxygen, Century Gothic, Verdana;
    font-size: 20px;
    color: #000000;
    margin-top: -15px;
`;
