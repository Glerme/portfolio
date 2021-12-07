import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;

  gap: 1rem;
  width: 100%;

  max-width: 1200px;

  margin: 0 auto;

  min-height: 80vh;

  @media ${breakpoints.md} {
    min-height: 80vh;
    justify-content: space-between;
  }

  @media ${breakpoints.lg} {
    flex-direction: row;
    min-height: 85vh;
  }
`;

export const TextContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;
  max-width: 600px;

  font-size: 1rem;
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
