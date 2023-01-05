import React from 'react';

// Styled components
import {
     Container,
     Header,
     HeaderTitle,
     Total
} from './styles';

const ResumeItem = ({ title, Icon, value }) => {
     return (
          <Container>
               <Header>
                    <HeaderTitle>
                         {title}
                    </HeaderTitle>
                    <Icon />
               </Header>
               <Total>
                    {value}
               </Total>
          </Container>
     );
};

export default ResumeItem;