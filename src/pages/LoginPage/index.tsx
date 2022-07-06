import React from 'react';
import './styled.css';
import LoginCard from '../../components/LoginCard';
import HeaderLogin from '../../assets/Image/headerLogin.png';
import FooterLogin from '../../assets/Image/footerLogin.png';
import Agenda from '../../assets/Image/agenda.png';
import {
        Div,
        Img,
        Header,
        Section,
        Footer
           } from './styled'

function LoginPage() {
  return (
    <div className="LoginPage">
      <Header className='headerLogin'>
        <h1 className='scheduleTitle'>Schedule</H1>
        <Img src={HeaderLogin} alt='Formas geometricas - parte superior' />
      </Header>

      <Section className="conteudoLogin">
        <LoginCard />
        <Img src={Agenda} alt='Agenda de contatos' classname="imagem"/>
      </Section>


      <Footer className='footerLogin'>
        <Img src={FooterLogin} alt='Formas geometricas - parte inferior' />
      </Footer>
    </div>
  );
}

export default LoginPage;