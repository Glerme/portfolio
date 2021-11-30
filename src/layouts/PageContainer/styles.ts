import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-content: center;

  margin: 0 auto;
  padding: 1rem;

  width: 100%;

  & > main {
    display: grid;
    place-content: center;

    min-height: 60vh;

    width: 100%;

    max-width: 1120px;
  }
`;
