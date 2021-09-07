import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 5px;

  background-color: var(--green);
  color: var(--white);

  font-size: 1rem;
  font-weight: 600;

  width: 100%;
  height: 3rem;

  &:active {
    transform: translate(2px, 3px);
  }
`;
