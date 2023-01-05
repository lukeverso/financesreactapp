import styled from 'styled-components';

export const Table = styled.table`
     width: 100%;
     background-color: #FFFFFF;
     padding: 20px;
     border-radius: 5px;
     max-width: 1120px;
     margin: 20px auto;
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
     text-align: start;
     border-bottom: inset;
     padding-bottom: 5px;
     text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
     width: ${(props) => (props.width ? props.width + '%' : 'auto')};
`;