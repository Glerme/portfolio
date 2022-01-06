import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    height: 40px;
    transform: translateY(0);
  }
  to {
    height: 10px;
    transform: translateY(30px);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: -30px;
  right: 0;

  padding: 0.5rem;

  cursor: pointer;

  animation: ${fadeIn} 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  z-index: 10;

  &:hover {
    opacity: 1;
  }
`;
