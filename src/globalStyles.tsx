import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
body {
  margin: 0px;
  padding: 0px;
  background-color: #F5F5F5;
  font-family: Oxygen, Century Gothic, Verdana;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
`

export default GlobalStyle;