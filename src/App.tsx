import React from 'react';
import AppRoutes from './routes';
import GlobalStyle from './globalStyles';

import AuthProvider from './context/AuthProvider';
import WarningModal from './components/WarningModal';


class App extends React.Component  {
  render (){

    return (
      <>
        <GlobalStyle />
        <AuthProvider>
          <WarningModal />
        </AuthProvider>
      </>
    )
  }
}

export default App;
