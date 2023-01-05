import React, { useEffect, useState } from 'react';

// Components imported to the screen
import Header from '../components/Header';
import Form from '../components/HomeComponents/Form';
import Resume from '../components/HomeComponents/Resume';

const HomePage = () => {
     const data = localStorage.getItem('transactions');

     const [transactions, setTransactions] = useState(data ? JSON.parse(data) : []);
     const [income, setIncome] = useState(0);
     const [expense, setExpense] = useState(0);
     const [total, setTotal] = useState(0);

     useEffect(() => {
          const amountExpense = transactions
               .filter((item) => item.expense)
               .map((transaction) => Number(transaction.amount));
          const amountIncome = transactions
               .filter((item) => !item.expense)
               .map((transaction) => Number(transaction.amount));
          const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
          const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
          const total = Math.abs(income - expense).toFixed(2);
          setIncome(`R$ ${income}`);
          setExpense(`R$ ${expense}`);
          setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
     }, [transactions]);

     const handleAdd = (transaction) => {
          const newTransactions = [...transactions, transaction];
          setTransactions(newTransactions);
          localStorage.setItem('transactions', JSON.stringify(newTransactions));
     };

     return (
          <>
               <Header
                    title='Controle financeiro'
               />
               <Resume
                    income={income}
                    expense={expense}
                    total={total}
               />
               <Form
                    handleAdd={handleAdd}
                    transactions={transactions}
                    setTransactions={setTransactions}
               />
          </>
     );
};

export default HomePage;