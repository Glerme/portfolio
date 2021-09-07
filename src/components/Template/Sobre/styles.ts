import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.section`
  grid-template-columns: 1fr 1fr;

  width: 100%;

  height: 100%;

  ${mq({
    display: ['flex', 'flex', 'grid'],
    'flex-direction': ['column', 'column'],
    'align-items': ['center', 'center'],
    'justify-content': ['center', 'center'],
  })}
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;

  padding: 1rem 0;

  margin: 1rem 0;
`;

export const Contato = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 2rem;

  div {
    span {
      color: var(--green);

      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
    }
  }
`;
