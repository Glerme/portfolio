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

  max-width: 1120px;

  margin: 0 auto;

  height: 100%;
  width: 100%;

  border: 1px solid red;

  ${mq({
    padding: ['0 1rem', '0'],
  })}
`;
