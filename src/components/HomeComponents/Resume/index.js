import React from 'react';

// Components imported to the screen
import ResumeItem from '../ResumeItem';

// Styled components
import { Container } from './styles';

// React icons
import {
     FaRegArrowAltCircleUp,
     FaRegArrowAltCircleDown,
     FaDollarSign
} from 'react-icons/fa';

const Resume = ({ income, expense, total }) => {
     return (
          <Container>
               <ResumeItem
                    title='Entradas'
                    Icon={FaRegArrowAltCircleUp}
                    value={income}
               />
               <ResumeItem
                    title='Saídas'
                    Icon={FaRegArrowAltCircleDown}
                    value={expense}
               />
               <ResumeItem
                    title='Total'
                    Icon={FaDollarSign}
                    value={total}
               />
          </Container>
     );
};

export default Resume;