import React from 'react';
import AppRoutes from './routes';
import GlobalStyle from './globalStyles';
import AuthProvider from './context/AuthProvider';


class App extends React.Component  {
  render (){

    return (
      <>
        <GlobalStyle />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </>
    )
  }
}

export default App;
