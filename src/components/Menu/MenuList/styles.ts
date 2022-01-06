import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const NavBarContainer = styled.section`
  z-index: 2000;
`;

export const MenuListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  background: var(--background-primary);

  list-style: none;

  top: 5rem;
  left: 0;

  width: 100%;
  height: 100%;

  @media ${breakpoints.md} {
    flex-direction: row;

    position: initial;
  }
`;
