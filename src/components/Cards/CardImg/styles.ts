import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  img {
    position: relative;
    border-radius: 10px;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  border: 5px solid var(--green);

  width: 300px;
  height: 390px;

  position: absolute;

  ${mq({
    top: ['40px', '40px', '30px'],
    right: ['0px', '0px', '110px'],
  })}

  z-index: 0;
`;
