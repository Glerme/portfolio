import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  ${mq({
    padding: ['1rem', '0', '0'],
  })}

  img {
    position: relative;
    border-radius: 10px;

    ${mq({
      width: ['300px', '100%', '100%'],
      height: ['400px', '400px', '400px'],
    })}
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

  top: 50px;
  right: 10px;

  /* ${mq({
    top: ['40px', '40px', '25px'],
    right: ['0px', '0px', '20px'],
  })} */

  z-index: 0;
`;
