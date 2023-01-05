import React from 'react';

import Header from '../components/Header';
import LoginBox from '../components/LoginComponents/LoginBox';

const LoginPage = () => {
     return (
          <>
               <Header
                    title='Login'
               />
               <LoginBox />
          </>
     );
};

export default LoginPage;