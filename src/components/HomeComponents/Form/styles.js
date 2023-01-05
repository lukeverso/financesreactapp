import styled from 'styled-components';

export const Container = styled.div`
     max-width: 1120px;
     margin: 20px auto;
     width: 100%;
     background-color: #FFFFFF;
     border-radius: 5px;
     display: flex;
     justify-content: space-around;
     padding: 15px 0;
     gap: 10px;

     @media (max-width: 750px) {
          display: flex;
          flex-direction: column;
     }
`;

export const InputContainer = styled.div`
     display: flex;
     flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
     outline: none;
     border-radius: 5px;
     padding: 5px 10px;
     font-size: 15px;
     border: 1px solid #CCCCCC;
     font-family: 'Poppins', sans-serif;
`;

export const RadioGroup = styled.div`
     display: flex;
     align-items: center;
     
     input {
          margin-left: 20px;
          margin-right: 10px;
          margin-top: 0;
          accent-color: #000000;
     }
`;

export const Button = styled.button`
     padding: 5px 20px;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     color: #FFFFFF;
     background-color: #008080;
     font-family: 'Poppins', sans-serif;

     &:hover {
          opacity: 0.8;
     }
`;