import styled from 'styled-components';

interface HeaderProps {
  isMenuOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  max-width: 1120px;

  height: 55px;
  width: 100%;

  img {
    width: 100px;
  }
`;

export const Header = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  max-width: 1120px;

  height: 55px;
  width: 100%;
  @media (max-width: 720px) {
    padding: 0 0.3rem;
    nav {
      display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    }
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: 0;
  color: var(--text-secondary);
  display: none;
  font-size: 0;
  padding: 0.3rem;

  @media (max-width: 720px) {
    display: block;
  }
`;
