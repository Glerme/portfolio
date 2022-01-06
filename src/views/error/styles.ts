import styled from 'styled-components';

export const ContainerError = styled.div`
  display: grid;
  place-items: center;

  height: 100vh;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    height: 100%;

    div {
      width: 100%;
    }

    h1 {
      text-align: center;

      font-size: 2rem;

      width: 100%;
    }
  }
`;
