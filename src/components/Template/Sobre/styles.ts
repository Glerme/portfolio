import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Content = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;

  ${mq({
    display: ['grid', 'flex', 'flex'],
    'flex-direction': ['column', 'column', 'row'],
    'justify-content': ['center', 'space-between'],
    'place-items': ['center'],
    'grid-template-columns': ['1fr'],
  })}
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;

  max-width: 600px;

  padding: 2rem;

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
