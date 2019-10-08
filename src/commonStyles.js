import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/Roboto-Bold.woff2') format('woff2'),
        url('./fonts/Roboto-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('./fonts/Roboto-Regular.woff2') format('woff2'),
        url('./fonts/Roboto-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
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
