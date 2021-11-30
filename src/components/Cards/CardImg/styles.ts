import styled from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  position: relative;

  img {
    border-radius: 10px;
    border: 3px solid var(--blue);

    width: 100%;

    z-index: 1;

    @media (min-width: ${breakpoints.sm}px) {
      height: 300px;
    }

    @media (min-width: ${breakpoints.md}px) {
      height: 400px;
    }

    @media (min-width: ${breakpoints.lg}px) {
      height: 400px;
    }
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  border: 5px solid var(--green);

  width: 100%;
  height: 100%;

  position: absolute;

  @media (min-width: ${breakpoints.sm}px) {
    top: 10px;
    right: -10px;
  }

  @media (min-width: ${breakpoints.md}px) {
    top: 15px;
    right: -15px;
  }

  z-index: 0;
`;
