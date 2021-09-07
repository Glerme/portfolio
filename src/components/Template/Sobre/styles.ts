import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  ${mq({
    display: ['grid', 'grid', 'flex'],
    'flex-direction': ['column', 'column', 'row'],
    'place-items': ['center'],
    padding: ['2rem', '2rem', '0'],
  })}
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;

  max-width: 600px;

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
