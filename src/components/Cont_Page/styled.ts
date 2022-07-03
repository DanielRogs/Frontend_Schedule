import styled from "styled-components";

export const Div = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const H1 = styled.h1`
  color: white;
  font-family: Arial;
`

export const Input = styled.input`
  border-radius: 10px;
  background-color: #D9D9D9;
  border: none;
  width: 35vw;
  height: 25px;

  ::placeholder{
    text-align: center;
  }

  @media (max-width: 1065px){
    width: 50vw;
  }
`

export const Button = styled.button`
  background-color: #000000;
  color: white;
  width: 25vw;
  height: 25px;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  transition: 0.25s;

  &:hover{
    border: solid 1px white;
  }

  @media (max-width: 1065px){
    width: 30vw;
  }
`
