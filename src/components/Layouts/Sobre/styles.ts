import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background-secondary); ;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;

  padding: 1rem 0;

  margin: 1rem 0;
`;

export const Contato = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 2rem;

  div {
    span {
      color: var(--green);

      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
    }
  }
`;
