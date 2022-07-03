import styled from "styled-components";

interface Props1 {
    fundo:string
    fundoTransição:string
    raioBorda:number
}

interface Props2 {
    TLetra:number
}

export const Input = styled.input<Props1>`
    background: ${(p) => p.fundo};
    border-radius: ${(p) => p.raioBorda}px;
    width: 450px;
    font-family: Oxygen, Century Gothic, Verdana;
    border: none;
    text-align: center;
    transition: 0.25s;

    &:focus{
        background: ${(p) => p.fundoTransição};
        color: white;
        font-weight: bold;
    }

    @media (max-width: 620px) {
        width: 250px;
        border: 0px;
    {
`;

export const Text = styled.p<Props2>`
    font-family: Oxygen, Century Gothic, Verdana;
    font-size: ${(p) => p.TLetra}px;
    color: #000000;
    margin: 20px 0px 2px 0px;
    text-align: left;
    font-weight: bold;
`;