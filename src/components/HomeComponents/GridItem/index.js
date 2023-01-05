import React from 'react';

// Styled components
import {
     TableRow,
     TableData
} from './styles';

// React icons
import {
     FaRegArrowAltCircleUp,
     FaRegArrowAltCircleDown,
     FaTrash
} from 'react-icons/fa';


const GridItem = ({ item, onDelete }) => {
     return (
          <TableRow>
               <TableData>
                    {
                         item.description
                    }
               </TableData>
               <TableData>
                    {
                         item.amount
                    }
               </TableData>
               <TableData alignCenter>
                    {
                         item.expense ?
                              <FaRegArrowAltCircleDown color='red' /> :
                              <FaRegArrowAltCircleUp color='green' />
                    }
               </TableData>
               <TableData alignCenter>
                    <FaTrash
                         onClick={() => onDelete(item.id)}
                         style={{ cursor: 'pointer' }}
                    />
               </TableData>
          </TableRow>
     );
};

export default GridItem;