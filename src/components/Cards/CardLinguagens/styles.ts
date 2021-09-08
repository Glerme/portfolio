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

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 0.5rem;

  padding: 0.5rem;

  width: 100%;

  p {
    font-weight: 600;
    width: 100%;

    text-align: center;
  }

  img {
    width: 100%;
    height: 150px;
    padding: 1rem;
  }

  &:hover {
    animation: ${iconAnimation} 1s infinite;
  }
`;
