import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  position: relative;

  img {
    border-radius: 10px;
    border: 3px solid var(--blue);

    width: 100%;

    z-index: 1;

    ${mq({
      height: ['300px', '400px', '400px'],
    })}
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  border: 5px solid var(--green);

  width: 100%;
  height: 100%;

  position: absolute;

  ${mq({
    top: ['10px', '15px'],
    right: ['-10px', '-15px'],
  })}

  z-index: 0;
`;
