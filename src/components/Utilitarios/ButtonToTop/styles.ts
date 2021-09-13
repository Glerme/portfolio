import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`{
  0% {
    height: 40px;
    transform: translateY(0);
  }
  100% {
    height: 10px;
    transform: translateY(30px);
  }
}`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: -30px;
  right: 0;

  font-size: 3rem;

  padding: 1rem;

  cursor: pointer;

  animation: ${fadeIn} 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  z-index: 1000;

  &:hover {
    opacity: 1;
  }
`;
