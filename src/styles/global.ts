import { createGlobalStyle } from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

const GlobalStyles = createGlobalStyle`

  :root{
    --white: #ffffff;

    --background-primary: #000000;
    --background-secondary: #111111;

    --container: #0B0A0A;

    --black-800: #1f1f1f;

    --green: #4EBA64;
    --green-light:#64EDAA;


    --blue: #7bccd9;
    --blue-dark: #008ba1;

  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html, body, div#__next {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;


    font-size: 16px;

    @media (min-width: ${breakpoints.sm}px) {
      font-size: 87.5%;
    }    

    @media (min-width: ${breakpoints.md}px) {
      font-size: 93.74%;
    } 

    @media (min-width: ${breakpoints.lg}px) {
      font-size: 100%;
    } 

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

  a{
    text-decoration: none;
    cursor: pointer;
    color: var(--white);

    
    &:visited{
      color: var(--white);
    }
  }

  p, a, button, label, input, textarea{
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  img{
    width: 100%;
    height: 100%;
  }

`;

export default GlobalStyles;
