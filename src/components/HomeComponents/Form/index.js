import React, { useState } from 'react';

// Components imported to the screen
import Grid from '../Grid';

// Styled components
import {
     Container,
     InputContainer,
     Label,
     Input,
     RadioGroup,
     Button
} from './styles';

const Form = ({ handleAdd, transactions, setTransactions }) => {
     const [amount, setAmount] = useState('');
     const [expense, setExpense] = useState(false);
     const [description, setDescription] = useState('');

     const generateId = () => Math.round(Math.random() * 1000);

     const handleSave = () => {
          if (!description || !amount) {
               alert('Informe a descrição e o valor.');
               return;
          } else if (amount < 1) {
               alert('O valor inserido precisa ser positivo.');
               return;
          };
          const transaction = {
               id: generateId(),
               description: description,
               amount: amount,
               expense: expense
          };
          handleAdd(transaction);
          setDescription('');
          setAmount('');
     };

     return (
          <>
               <Container>
                    <InputContainer>
                         <Label>
                              Descrição
                         </Label>
                         <Input
                              value={description}
                              onChange={(input) => setDescription(input.target.value)}
                         />
                    </InputContainer>
                    <InputContainer>
                         <Label>
                              Valor
                         </Label>
                         <Input
                              value={amount}
                              onChange={(input) => setAmount(input.target.value)}
                         />
                    </InputContainer>
                    <RadioGroup>
                         <Input
                              type='radio'
                              id='income'
                              defaultChecked
                              name='group1'
                              onChange={() => setExpense(!expense)}
                         />
                         <Label htmlFor='income'>
                              Entrada
                         </Label>
                         <Input
                              type='radio'
                              id='expense'
                              name='group1'
                              onChange={() => setExpense(!expense)}
                         />
                         <Label htmlFor='expense'>
                              Saída
                         </Label>
                    </RadioGroup>
                    <Button onClick={handleSave}>
                         Adicionar
                    </Button>
               </Container>
               <Grid
                    items={transactions}
                    setItems={setTransactions}
               />
          </>
     );
};

export default Form;