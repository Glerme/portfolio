import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 1.5rem;

  width: 100%;

  ${mq({
    'grid-template-columns': ['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
  })}
`;
