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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--black-800);
  border-radius: 10px;

  margin: 0.3rem;

  width: 120px;
  height: 120px;

  svg {
    margin-bottom: 1rem;
  }

  &:hover {
    animation: ${iconAnimation} 1s infinite;
  }
`;
