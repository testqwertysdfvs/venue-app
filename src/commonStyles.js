import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
body {
   font-family: 'Roboto';
   padding: 20px 40px;
}
`;

export const Button = styled.button`
  background-color: #534BB3;
  border: none;
  outline: none;
  border-radius: 20px;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    background-color: #5C4FDE;
    transition-duration: .4s;
  }
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  border: 1px solid #eee;
  height: 40px;
  padding: 0 15px;
  margin-right: 20px;
  min-width: 200px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #b4b4b4;
  }
  :-ms-input-placeholder {
     color: #b4b4b4;
  }
`;

export const InputBig = styled(Input)`
  font-size: 18px;
  height: 50px;
  padding: 0 20px;
 
`;
