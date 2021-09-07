import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  padding: 1rem;
`;

export const Pager = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  z-index: 10;

  ${mq({
    right: ['15px', '-10px', '-10px'],
  })}

  button {
    width: 40px;
    height: 8px;

    border-radius: 10px;
    border: 0;

    transition: background-color 0.5s;

    &.active {
      background-color: var(--green);
    }
  }
`;
