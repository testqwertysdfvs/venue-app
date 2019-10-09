import styled from 'styled-components'

export const Table = styled.table`
  border: 1px solid #a7a7a7;
  border-collapse: collapse;
  margin: 20px 0 ;
  min-width: 815px;
  th {
    border: 1px solid #a7a7a7;
    border-bottom: 2px solid #58d9bf;
    height: 140px;
  }
`;

export const UserInput = styled.form`
  display: flex;
  align-items: center;
`;

export const ContentBlock = styled.div`
  display: flex;
  width: 815px;
  height: 400px;
  align-items: center;
  justify-content: center;
  color: #b4b4b4;
  font-size: 24px;
  text-align: center;
  img {
   width: 500px;
  }
`;
