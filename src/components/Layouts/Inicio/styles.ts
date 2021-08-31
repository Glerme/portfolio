import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  height: 100%;

  margin-top: 1rem;

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 3.125rem;
      max-width: 100%;
    }

    span {
      font-size: 3.125rem;
      color: var(--green);
    }

    & > div {
      width: 14rem;
    }
  }

  img {
    width: 500px;
    height: 400px;
  }
`;
