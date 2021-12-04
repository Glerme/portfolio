import styled, { keyframes } from 'styled-components';

const iconAnimation = keyframes`
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
`;

export const Container = styled.a`
  display: grid;
  place-items: center;
  place-content: center;

  background-color: var(--black-800);
  border-radius: 10px;

  padding: 1rem;

  width: 100%;
  height: 100%;

  svg {
    margin-bottom: 1rem;
  }

  &:hover {
    animation: ${iconAnimation} 1s infinite;
  }
`;
