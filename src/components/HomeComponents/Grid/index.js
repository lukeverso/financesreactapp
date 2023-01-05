import React from 'react';

// Components imported to the screen
import GridItem from '../GridItem';

// Styled components
import {
     Table,
     Head,
     Body,
     TableRow,
     TableHeader
} from './styles';

const Grid = ({ items, setItems }) => {
     const onDelete = (id) => {
          const newArray = items.filter(transaction => transaction.id !== id);
          setItems(newArray);
          localStorage.setItem('transactions', JSON.stringify(newArray));
     };

     return (
          <Table>
               <Head>
                    <TableRow>
                         <TableHeader width={40}>
                              Descrição
                         </TableHeader>
                         <TableHeader width={40}>
                              Valor
                         </TableHeader>
                         <TableHeader width={10} alignCenter>
                              Tipo
                         </TableHeader>
                         <TableHeader width={10}></TableHeader>
                    </TableRow>
               </Head>
               <Body>
                    {
                         items?.map((item, index) => (
                              <GridItem
                                   key={index}
                                   item={item}
                                   onDelete={onDelete}
                              />
                         ))
                    }
               </Body>
          </Table>
     );
};

export default Grid;