import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

export const Container = styled.div`
  display: grid;
  place-items: center;

  border: 3px solid var(--blue);
  border-radius: 10px;

  background-color: var(--container);

  position: relative;

  padding: 0.5rem;

  width: 100%;
  height: 100%;

  max-width: 1150px;

  margin: 0 auto;

  main {
    display: grid;
    place-items: center;

    position: relative;
    background-color: var(--container);

    border-radius: 10px;

    padding: 1rem;

    width: 100%;

    @media ${breakpoints.md} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 80vh;
    }

    form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      width: 100%;
      height: 100%;
    }
  }
`;

export const RedesSociais = styled.div`
  display: grid;
  place-items: center;

  padding: 1rem;

  h2 {
    text-align: center;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media ${breakpoints.md} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media ${breakpoints.lg} {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 3px solid var(--green);

  position: absolute;

  width: 100%;
  height: 100%;

  top: 12px;
  left: 12px;

  z-index: -10;
`;
