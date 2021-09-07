import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 60px);

  ${mq({
    'flex-direction': ['column-reverse', '', 'row'],
  })}

  img {
    ${mq({
      width: ['300px', '350px', '500px'],
    })}
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;

    ${mq({
      'align-items': ['center', 'center', 'flex-start'],
    })}

    h1 {
      text-align: center;
      max-width: 100%;

      ${mq({
        'text-align': ['center', 'center', 'left'],
        'font-size': ['2.5rem', '2.5rem', '3.125rem'],
      })}
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
