import React from 'react';
import './styled.css';
import Cad_Card from '../../components/Cad_card';
import Logo from '../../assets/Image/logo.svg'


function CadPage() {
  return (
    <>
      <div className="App">

        <div className='logoPart'>
          <img src={Logo}/>
          <h2>Schedule</h2>
        </div>

        <Cad_Card />
      </div>
      <footer> 
        <div className='divfooter'></div>
      </footer>
    </>
    
    
  );
}

export default CadPage;