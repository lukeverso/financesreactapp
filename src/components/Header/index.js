import React from 'react';

// Styled components
import {
     Container,
     H1,
     Title
} from './styles';

const Header = ({ title }) => {
     return (
          <Container>
               <H1>
                    <Title>
                         {title}
                    </Title>
               </H1>
          </Container>
     );
};

export default Header;