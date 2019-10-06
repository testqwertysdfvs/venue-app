import {createGlobalStyle} from 'styled-components'

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
}
`;
