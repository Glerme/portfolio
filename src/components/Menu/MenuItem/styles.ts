import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;

  margin: 1rem;

  width: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;

    width: 100%;

    transition: color 0.2s;

    &:hover {
      color: var(--green-light);
    }
  }
`;
