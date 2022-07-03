import styled from "styled-components"

interface Props {
    color:string;
}

export const Submit = styled.button<Props>`
    background: ${(p) => p.color};
    border-radius: 5px;
    padding: 5px 30px 5px 30px;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.25s;

    &:hover{
        background: #129979;
        color: black;
    }
`