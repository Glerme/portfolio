import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--container);
  border-radius: 10px;

  border: 3px solid var(--blue);

  padding: 2rem 5rem;

  margin-bottom: 3rem;

  position: relative;

  width: 100%;
  height: 100%;

  ${mq({
    height: ['', '100%', '100%', '80vh'],
  })}

  & > section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    width: 100%;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  border: 3px solid var(--green);

  position: absolute;

  width: 100%;
  height: 100%;

  ${mq({
    top: ['10px', '15px'],
    right: ['-10px', '-15px'],
  })}

  z-index: -10;
`;
