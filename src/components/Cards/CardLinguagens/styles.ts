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

  /* background-color: var(--black-500); */

  /* width: 100%; */

  transition: all 0.5s ease-in-out;

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
`;
