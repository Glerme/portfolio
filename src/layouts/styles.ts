import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.md} {
    display: grid;
    grid-template:
      'header' 8rem
      'main' 1fr;

    min-height: 100%;

    div {
      grid-area: main;
    }
  }
`;
