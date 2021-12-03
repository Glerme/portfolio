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

  top: 10px;
  left: 10px;

  z-index: 0;
`;
