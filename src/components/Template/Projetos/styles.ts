import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 1rem;
  margin-bottom: 3rem;

  width: 100%;
  height: 100%;

  ${mq({
    height: ['', '100%', '100%'],
  })}
`;
