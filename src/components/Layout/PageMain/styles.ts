import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;

  border: 1px solid red;

  width: 100%;

  ${mq({
    padding: ['0 1rem', '0'],
  })}
`;
