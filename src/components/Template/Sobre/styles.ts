import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  gap: 1rem;
  width: 100%;

  ${mq({
    'flex-direction': ['column', 'column', 'row'],
  })}

  @media(min-width: 768px) and (max-width: 950px) {
    justify-content: center;
  }
`;

export const TextContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;
  max-width: 600px;

  margin: 1rem 0;
`;

export const Contato = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 2rem;

  div {
    width: 100%;

    span {
      color: var(--green);

      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
    }
  }
`;
