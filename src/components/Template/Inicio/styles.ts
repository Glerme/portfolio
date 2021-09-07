import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-template-columns: 1fr 1fr;
  place-items: center;

  width: 100%;

  height: calc(100vh - 60px);

  ${mq({
    display: ['grid', 'grid', 'flex'],
    'grid-template-columns': ['1fr'],
  })}

  img {
    width: 300px;
  }

  section {
    h1 {
      font-size: 3.125rem;
      max-width: 100%;
    }

    span {
      font-size: 3.125rem;
      color: var(--green);
    }

    & > div {
      width: 14rem;
    }
  }
`;
