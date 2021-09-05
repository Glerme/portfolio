import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--black-500);
  border-radius: 10px;
  border: 0;

  padding: 1rem;

  transition: all 0.5s ease-in-out;

  p {
    font-weight: 600;
  }

  &:hover {
    background-color: #296335;
  }
`;
