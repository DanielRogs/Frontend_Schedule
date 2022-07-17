import styled from "styled-components"

interface Props {
    color:string;
    Tletra:number;
    padding:number;
}

export const Submit = styled.button<Props>`
    background: ${(p) => p.color};
    border-radius: 5px;
    padding: 5px ${(p) => p.padding}px 5px ${(p) => p.padding}px;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.25s;
    font-size: ${(p) => p.Tletra}px;

    &:hover{
        background: #129979;
        color: black;
    }

    @media (max-width: 1075px) {
        font-size: ${(p) => p.Tletra/2}px;
    }

    @media (max-width: 574px) {
        font-size: ${(p) => p.Tletra/4}px;
    }

`
export const ButtonResponsivo = styled.button<Props>`
    background: ${(p) => p.color};
    border-radius: 5px;
    padding: 1em ${(p) => p.padding}em 1em ${(p) => p.padding}em;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.25s;
    font-size: ${(p) => p.Tletra}em;

    &:hover{
        background: #129979;
        color: black;
    }

`