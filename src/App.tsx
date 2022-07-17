import React from 'react';
import AppRoutes from './routes';
import GlobalStyle from './globalStyles';
import InfoPage from './pages/InfoPage';

class App extends React.Component  {
  render (){
    return (
      <>
        <GlobalStyle />
        <AppRoutes />
      </>
    )
  }
}

export default App;
