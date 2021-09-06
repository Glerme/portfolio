import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root{
    --white: #ffffff;

    --gray-100: #F3F3F3;

    --background-primary: #000000;
    --background-secondary: #111111;

    --container: #0B0A0A;

    --black-500: #1F1F1F;
    --black-800: #494949;

    --green: #4EBA64;
    --green-light:#64EDAA;

    --red: #E3514D;
    --red-light: #FF726F;

  }


 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, div#__next {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  body {
    background-color: var(--background-primary);
    color: var(--white); 
  }

  body, input, textarea, button {
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    font-family: 'Titillium Web', sans-serif;
  }

  button {
    cursor: pointer;
  }

  img{
    width: 100%;
    height: 100%;
  }

  a{
    text-decoration: none;
    cursor: pointer;
    color: var(--white);

    
    &:visited{
      color: var(--white);
    }
  }

  p, a, button{
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
 
`;

export default GlobalStyles;
