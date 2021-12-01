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
  border-radius: 0 0 8px 8px;

  list-style: none;
  width: 100%;

  position: absolute;

  top: 5rem;
  left: 0;

  @media ${breakpoints.md} {
    flex-direction: row;

    position: initial;
  }
`;
