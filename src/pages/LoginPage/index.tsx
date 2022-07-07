import React from 'react';
import LoginCard from '../../components/LoginCard';
import HeaderLogin from '../../assets/Image/headerLogin.png';
import FooterLogin from '../../assets/Image/footerLogin.png';
import Agenda from '../../assets/Image/agenda.png';
import {
        Title,
        Img,
        Header,
        Section,
        Footer
} from './styled'

function LoginPage() {
  return (
    <div className="LoginPage">
      <Header className='headerLogin'>
        <Title className='scheduleTitle'>Schedule</Title>
        <Img heightPx = {8} src={HeaderLogin} alt='Formas geometricas - parte superior' />
      </Header>

      <Section className="conteudoLogin">
        <LoginCard />
        <img src={Agenda} alt='Agenda de contatos' className='agenda_img'/>
      </Section>


      <Footer className='footerLogin'>
        <Img  heightPx = {11.2} src={FooterLogin} alt='Formas geometricas - parte inferior' />
      </Footer>
    </div>
  );
}

export default LoginPage;