import React from 'react';

// Components imported to the screen
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';

// Styled components
import { GlobalStyles } from './styles/global';

const App = () => {
     return (
          <>
               {/* <LoginPage /> */}
               <HomePage />
               <GlobalStyles />
          </>
     );
};

export default App;