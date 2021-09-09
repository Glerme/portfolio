import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 1120px;

  margin: 0 auto;

  border: 1px solid red;

  height: 100%;

  ${mq({
    display: ['grid', 'flex'],
    'grid-template-columns': ['1fr'],
  })}
`;
