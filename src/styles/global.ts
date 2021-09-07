import { createGlobalStyle } from 'styled-components';
import facepaint from 'facepaint';

export const breakpoints = [
  '@media(min-width: 425px)',
  '@media(min-width: 768px)',
  '@media(min-width: 1080px)',
];

const mq = facepaint(breakpoints);

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

    font-size: 1rem;
    ${mq({ 'font-size': ['87.5%', '93.75%', '100%'] })}

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
 

  .card__collection {
    position: relative;
    display: block;
    padding: 10px;
    overflow: hidden;

    .cards {
      width: 300px;
      height: 400px;
      display: block;
      background-size: cover;
      float: left;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      background-position: center;
      margin: 10px;
    }


    .cards--two {
      position: relative;
      backface-visibility: hidden;

      p {
        position: absolute;
        top: 83%;
        left: -100%;
        text-transform: capitalize;
        color: #fff;
        font-size: 20px;
        z-index: 8;
        transition: all 0.6s ease;
      }

      &:hover {
        p {
          left: 8%;
        }

        img {
          transform: translateY(-15px);
        }

        .cards--two__rect {
          top: 75%;

          &:before {
            transform: translateY(15px);
          }
        }

        li {
          transform: translateY(0);
        }

        .cards--two__tri {
          right: -40%;

          &:before {
            right: -312px;
          }
        }
      }

      img {
        transition: all 0.2s ease;
      }

      &__tri {
        border-top: 220px solid transparent;
        border-bottom: 190px solid transparent;
        border-right: 288px solid var(--gray-100);
        opacity: 0.9;
        position: absolute;
        display: block;
        top: 0;
        right: -100%;
        transition: all 0.3s ease-in-out;

        &:before {
          border-top: 220px solid transparent;
          border-bottom: 190px solid transparent;
          border-right: 288px solid var(--green);
          position: absolute;
          content: '';
          display: block;
          top: -220px;
          right: -612px;
          transition: all 0.3s ease-in-out;
          transition-delay: 0.2s;
        }
      }

      &__rect {
        width: 750px;
        height: 200px;
        background: var(--red);
        display: block;
        position: absolute;
        top: 175%;
        left: -78%;
        transform: rotate(30deg);
        z-index: 5;
        opacity: 0.9;
        transition: all 0.3s ease-in-out;

        &:before {
          content: '';
          display: block;
          width: 100%;
          position: relative;
          height: 100%;
          background: $color-box-5;
          transform: translateY(200px);
          z-index: 2;
          transition: all 0.3s ease-in-out;
          transition-delay: 0.1s;
        }
      }

       ul {
        list-style: none;
        position: absolute;
        bottom: 0;
        left: 15px;
        z-index: 9;
        
        li {
          display: inline-block;
          font-size: 16px;
          margin: 7px;
          color: #fff;
          transition: all .2s ease-in-out;
          transform: translateY(100px);
          
          &:nth-child(2) {
            transition-delay: .2s;
          }
          
          &:nth-child(3) {
            transition-delay: .3s;
          }
          
          &:nth-child(4) {
            transition-delay: .4s;
          }
        }
      }
    }
  }

`;

export default GlobalStyles;
