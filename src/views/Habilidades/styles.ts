import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--container);
  border-radius: 10px;

  border: 3px solid var(--blue);

  padding: 1rem 2rem;

  position: relative;

  width: 100%;
  height: 100%;

  max-width: 1150px;

  margin: 0 auto;

  min-height: 80vh;

  @media ${breakpoints.md} {
    min-height: 80vh;
  }

  @media ${breakpoints.lg} {
    min-height: 85vh;
  }

  & > section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    width: 100%;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  border: 5px solid var(--green);

  position: absolute;

  width: 100%;
  height: 100%;

  top: 15px;
  left: 0px;

  @media ${breakpoints.md} {
    top: 15px;
    left: 15px;
  }

  z-index: -10;
`;
