import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mq({
    display: ['grid', 'grid', 'flex'],
    'flex-direction': ['column', 'column', 'row'],
    'place-items': ['center'],
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
