import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

interface HeaderProps {
  isMenuOpen: boolean;
}

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: header;

  width: 100%;
  height: 100%;
`;

export const Header = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${breakpoints.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1200px;
  }

  section {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  }
`;

export const MenuButton = styled.button<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--text-secondary);
  font-size: 0;

  position: relative;

  @media ${breakpoints.md} {
    display: none;
  }
`;
