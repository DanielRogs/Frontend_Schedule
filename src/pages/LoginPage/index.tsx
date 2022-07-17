import React from "react";
import LoginCard from "../../components/LoginCard";
import HeaderLogin from "../../assets/Image/headerLogin.png";
import FooterLogin from "../../assets/Image/footerLogin.png";
import Agenda from "../../assets/Image/agenda.png";
import { Title, Img, Header, Section, Footer } from "./styled";

import Warning from '../../components/Warning';


class LoginPage extends React.Component<{}> {
  constructor(props: any) {
    super(props);
    
  }


  render(): React.ReactNode {
    return (
      <>
        <Warning
          callbackParentIsVisible = {false}
          errorMensage="Email ou senha inválidos!"
          mensage="Tente Novamente"
        />

        <Header className="headerLogin">
          <Title className="scheduleTitle">Schedule</Title>
          <Img
            src={HeaderLogin}
            alt="Formas geometricas - parte superior"
            className="img-header"
          />
        </Header>

        <Section className="conteudoLogin">
          <LoginCard />
          <img src={Agenda} alt="Agenda de contatos" className="agenda_img" />
        </Section>

        <Footer className="footerLogin">
          <Img src={FooterLogin} alt="Formas geometricas - parte inferior" />
        </Footer>
      </>
    );
  }
}

export default LoginPage;
