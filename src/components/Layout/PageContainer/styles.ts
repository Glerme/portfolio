import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  padding: 1rem;

  width: 100%;

  & > main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 80vh;

    width: 100%;

    max-width: 1120px;
  }
`;
