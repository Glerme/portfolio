import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 2000;

  @media (max-width: 720px) {
    background-color: var(--container);

    padding: 0;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: initial;
  }
`;

export const MenuListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
    flex: 1;
  }
`;
