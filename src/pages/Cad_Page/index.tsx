import React from 'react';
import './styled.css';
import CadastroCad from '../../components/CadastroCad';
import Logo from '../../assets/Image/logo.svg'


function CadPage() {
  return (
    <>
      <div className="App">

        <div className='logoPart'>
          <img src={Logo} />
          <h2>Schedule</h2>
        </div>

        <CadastroCad />
      </div>
      <footer>
        <div className='divfooter'></div>
      </footer>
    </>


  );
}

export default CadPage;