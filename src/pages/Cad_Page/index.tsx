import React from 'react';
import CadastroCad from '../../components/CadastroCad';
import Logo from '../../assets/Image/logo.svg'
import { Link } from 'react-router-dom';
import {
        Div,
        DivLogo,
        DivFooter,
        Img,
        H2,
        Footer
} from './styled'

function CadPage() {
  return (
    <>
      <Div className="All">

        <Link to ='/login'>
          <DivLogo className='logoPart'>
            <Img src={Logo} />
            <H2>Schedule</H2>
        </DivLogo>
        
        </Link>

        <CadastroCad />
      
        <Footer>
          <DivFooter className='divfooter'></DivFooter>
        </Footer>
        
      </Div>

    </>


  );
}

export default CadPage;