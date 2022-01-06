import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

interface HeaderProps {
  isMenuOpen: boolean;
}

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  background: var(--background-primary);

  color: var(--white);
  z-index: 12;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: fit-content;

  @media ${breakpoints.md} {
    position: initial;

    max-width: 1140px;
    margin: 0 auto;

    width: 100%;

    nav {
      display: flex;
      justify-content: space-between;

      width: 100%;

      position: inherit;
    }
  }
`;

export const Logo = styled.section`
  display: grid;
  place-items: center;

  height: 100%;

  z-index: 12;
`;

export const NavButtons = styled.ul<HeaderProps>`
  display: none;

  list-style: none;

  background: transparent;

  width: 100%;
  height: 100vh;

  list-style: none;

  ${props =>
    props.isMenuOpen &&
    css`
      display: grid;
      place-items: center;

      position: absolute;

      background: var(--black-800);

      top: 0;
      left: 0;

      width: 100%;

      @media ${breakpoints.md} {
        display: flex;
        justify-content: center;
        align-items: center;

        background: transparent;

        margin-top: 0;

        position: initial;

        height: initial;
      }
    `}

  @media ${breakpoints.md} {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    background: transparent;

    margin-top: 0;

    height: initial;
  }

  li {
    transform: translateY(2%);
    transition: all 300ms ease-in;

    padding: 1rem;

    width: 100%;

    &:first-child {
      margin-top: 5rem;
    }

    @media ${breakpoints.md} {
      margin-top: initial;

      width: initial;
      height: initial;

      &:first-child {
        margin-top: initial;
      }
    }

    a {
      display: grid;
      place-items: center;

      font-size: 1rem;

      transition: all 0.4s ease-in;

      &:hover {
        color: var(--green);
      }
    }
  }
`;

export const MenuMobile = styled.button<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  border: 0;
  font-size: 0;

  width: 80px;
  height: 80px;
  cursor: pointer;

  @media ${breakpoints.md} {
    display: none;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 2px;
    background-color: var(--white);
    position: relative;
    top: 0;
    left: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background-color: var(--white);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition-duration: 0.5s;
    }

    &:before {
      top: -10px;

      ${props =>
        props.isMenuOpen &&
        css`
          top: 0;
          transform: rotate(45deg);
        `}
    }

    &:after {
      top: 10px;

      ${props =>
        props.isMenuOpen &&
        css`
          top: 0;
          transform: rotate(135deg);
        `}
    }

    ${props =>
      props.isMenuOpen &&
      css`
        background-color: rgba(0, 0, 0, 0);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
      `}
  }
`;
