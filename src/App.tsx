import React from 'react';
import AppRoutes from './routes';
import GlobalStyle from './globalStyles';


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
