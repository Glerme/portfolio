import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    justify-content: space-around;
    flex-direction: column;

    max-width: 600px;

    ${mq({
      'align-items': ['center', 'center', 'flex-start'],
    })}

    h1 {
      text-align: center;

      max-width: 500px;

      ${mq({
        'text-align': ['center', 'center', 'left'],
        'font-size': ['2rem', '2.5rem', '3.125rem'],
      })}
    }

    span {
      font-size: 3.125rem;
      color: var(--green);
    }

    & > button {
      width: 14rem;
    }
  }
`;
