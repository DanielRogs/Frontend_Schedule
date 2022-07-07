import styled from "styled-components";

interface Props {
    heightPx: number;
}

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    margin-bottom: 20vh;
`;

export const Title = styled.h1`
    font-size: 80px;
    font-weight: 400;
    text-decoration: underline;
    text-decoration-color: #01C77F;
    margin: 1rem 3rem 0 4rem;   
    padding: 0px;

    @media (max-height: 1080px) {
        font-size: 60px;
    {
`;

export const Img = styled.img<Props>`
    max-width: fit-content;
    height: ${(p) => p.heightPx}vw;

    @media (max-width: 1075px) {
        height: 90px;
    {
`;

export const Section = styled.section`
    display: flex;
    height: 50vh;
    width: 100vw;
    justify-content: center;
    align-items: center;

    .agenda_img{
        height: 60vh;
    }

    @media (max-width: 809px) {
        .agenda_img{
           height: 50vh; 
        }
    {

    @media (max-width: 683px) {
        .agenda_img{
            height: 40vh; 
        }
    {

    @media (max-width: 627px) {
        .agenda_img{
           height: 0vh; 
        }
    {
`;

export const Footer = styled.footer`
    display: flex;
    height: 5vh;

    @media (max-width: 1075px) {
        Img{
            height: 16vw;
        }
    {

    @media (max-width: 911px) {
        Img{
            height: 30vw;
        }
    {

    @media (max-width: 811px) {
        Img{
            height: 40vw;
        }
    {
`;