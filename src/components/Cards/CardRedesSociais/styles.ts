import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--black-500);
  border-radius: 10px;

  margin: 0.5rem;

  width: 120px;
  height: 120px;

  svg {
    margin-bottom: 1rem;
  }

  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--black-500);
  border-radius: 10px;
  border: 0;

  padding: 2rem;

  width: 110px;
  height: 120px;

  transition: all 0.5s ease-in-out;

  svg {
    width: 100%;
  }

  &:hover {
    background-color: #296335;
  } */
`;
