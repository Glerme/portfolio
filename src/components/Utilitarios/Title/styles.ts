import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;

  width: 100%;

  p {
    ${mq({
      'font-size': ['3.2rem', '4rem', '5rem'],
    })}

    font-weight: 600;

    margin-top: 1rem;

    opacity: 0.1;

    position: absolute;
  }

  h1 {
    margin-top: 1rem;

    color: var(--green);

    ${mq({
      'font-size': ['2rem', '2rem', '3.125rem'],
    })}
  }
`;
