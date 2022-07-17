import React from 'react';
import AppRoutes from './routes';
import GlobalStyle from './globalStyles';
import AuthProvider from './context/AuthProvider';
import ContactPage from './pages/ContactPage';


class App extends React.Component  {
  render (){

    return (
      <>
        <GlobalStyle />
        <AuthProvider>
          <ContactPage/>
        </AuthProvider>
      </>
    )
  }
}

export default App;
