import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 1px solid blue;

  max-width: 1120px;

  margin: 0 auto;
  padding: 0 2rem;

  width: 100%;
  height: 100%;

  ${mq({
    display: ['grid', 'flex'],
    'grid-template-columns': ['1fr'],
  })}
`;
