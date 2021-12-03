import styled, { keyframes } from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

export const animationTypeWriter = keyframes`
 0% {
    opacity: 0;
    transition: all 0.2s;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    width: 100%;
    height: 100%;

    @media ${breakpoints.md} {
      flex-direction: row;
    }
  }
`;

export const SectionCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;

  padding: 1rem;

  max-width: 1200px;

  @media ${breakpoints.md} {
    justify-content: center;
    align-items: initial;
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media ${breakpoints.md} {
      text-align: left;
      font-size: 2rem;
    }

    &::after {
      content: '|';
      margin-left: 3px;
      opacity: 1;
      animation: ${animationTypeWriter} 0.7s infinite;
    }

    span {
      font-size: 3.125rem;
      color: var(--green);
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    border-radius: 5px;

    background-color: var(--green);
    color: var(--white);

    font-size: 1rem;
    font-weight: 600;

    width: 100%;
    height: 3rem;

    max-width: 380px;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      transform: translate(2px, 3px);
    }
  }
`;
