import React from 'react';
import './styled.css';
import Cad_Card from '../../components/Cad_card';

function Cad_Page() {
  return (
    <div className="App">

      <div className='logo_part'>
        <h2>Schedule</h2>
      </div>

      <Cad_Card />
    </div>
  );
}

export default Cad_Page;