import styled from "styled-components";


export const ModalBackground = styled.div`
    z-index: 10;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;


    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.3);

`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #01C77F;
    width: 40vw;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    margin-top: -20vh;
    left: 50%;
    margin-left: -20vw;
`

export const DivAviso = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

export const DivX = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-top: 10px
`

export const Img = styled.img`
    width: 25px;
`

export const DivImg = styled.div`
    display: flex;
    justify-content: center;

    .aviso{
        font-size: 6vw;
    };
`

export const Title = styled.h3`

`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`

export const A = styled.a`
    cursor: pointer;
`