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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    height: 100px;
    padding: 0.5rem;
  }

  p {
    font-weight: 600;

    text-align: center;
  }

  &:hover {
    animation: ${iconAnimation} 1s infinite;
  }
`;
