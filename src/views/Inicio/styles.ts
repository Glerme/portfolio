import styled, { keyframes } from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

export const animationTypeWriter = keyframes`
 0% {
    opacity: 0;
    transition: all 0.2s;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  width: 100%;
  height: 75vh;

  @media ${breakpoints.md} {
    flex-direction: row;
  }

  img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.xs}) {
    height: 300px;
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    max-width: 600px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      /* h1 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1rem;

        &::after {
          content: '|';
          margin-left: 3px;
          opacity: 1;
          animation: ${animationTypeWriter} 0.7s infinite;
        }
      } */
    }

    span {
      font-size: 3.125rem;
      color: var(--green);
    }

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;

      border: 0;
      border-radius: 5px;

      background-color: var(--green);
      color: var(--white);

      font-size: 1rem;
      font-weight: 600;

      width: 100%;
      height: 3rem;

      &:active {
        transform: translate(2px, 3px);
      }
    }
  }
`;
