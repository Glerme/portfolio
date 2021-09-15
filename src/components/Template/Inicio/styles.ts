import styled, { keyframes } from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const animationTypeWriter = keyframes`
 0% {
    opacity: 0;
    transition: all 0.2s;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 3rem;

  ${mq({
    'flex-direction': ['column-reverse', '', 'row'],
    height: ['75vh', '100%', '100%', '80vh'],
  })}

  img {
    ${mq({
      width: ['300px', '350px', '500px'],
    })}
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;

    max-width: 600px;

    ${mq({
      'align-items': ['center', 'center', 'flex-start'],
    })}

    h1 {
      text-align: center;

      /* max-width: 500px;s */

      ${mq({
        'max-width': ['200px', '500px'],
        'text-align': ['center', 'center', 'left'],
        'font-size': ['2rem', '2.5rem', '3.125rem'],
        'margim-bottom': ['1rem'],
      })}

      &::after {
        content: '|';
        margin-left: 3px;
        opacity: 1;
        animation: ${animationTypeWriter} 0.7s infinite;
      }
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

      width: 14rem;
      height: 3rem;

      &:active {
        transform: translate(2px, 3px);
      }
    }
  }
`;
