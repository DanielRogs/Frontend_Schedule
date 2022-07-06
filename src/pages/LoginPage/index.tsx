import React from 'react';
import './styled.css';
import LoginCard from '../../components/LoginCard';
import HeaderLogin from '../../assets/Image/headerLogin.png';
import FooterLogin from '../../assets/Image/footerLogin.png';
import Agenda from '../../assets/Image/agenda.png';

function LoginPage() {
  return (
    <div className="LoginPage">
      <header className='headerLogin'>
        <h1 className='scheduleTitle'>Schedule</h1>
        <img src={HeaderLogin} alt='Formas geometricas - parte superior' />
      </header>

      <section className="conteudoLogin">
        <LoginCard />
        <img src={Agenda} alt='Agenda de contatos'/>
      </section>


      <footer className='footerLogin'>
        <img src={FooterLogin} alt='Formas geometricas - parte inferior' />
      </footer>
    </div>
  );
}

export default LoginPage;