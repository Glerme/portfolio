import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
