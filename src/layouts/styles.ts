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

    > div {
      width: 100%;
      max-width: 1200px;

      padding: 1rem;
      margin: 0 auto;
    }
  }
`;
