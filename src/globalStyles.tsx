import { createGlobalStyle } from 'styled-components';
import px2vw from "./utils/px2vw";
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
body {
  margin: 0px;
  padding: 0px;
  background-color: #F5F5F5;
  font-family: 'Oxygen', sans-serif;
  box-sizing: border-box;
}
:root {
  font-size: ${px2vw(24)};

  @media (min-width: 320px) {
    font-size: ${px2vw(18)};
  }

  @media (min-width: 768px) {
    font-size: ${px2vw(16)};
  }
}

`

export default GlobalStyle;