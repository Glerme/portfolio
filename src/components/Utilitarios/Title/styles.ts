import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100%;

  p {
    font-size: 5.5rem;
    font-weight: 600;

    opacity: 0.1;

    position: absolute;
  }

  h1 {
    font-size: 3.125rem;

    color: var(--green);
  }
`;