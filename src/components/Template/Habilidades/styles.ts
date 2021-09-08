import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--container);
  border-radius: 10px;

  padding: 2rem 5rem;

  position: relative;

  main {
    z-index: 5;
    width: 100%;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  border: 5px solid var(--green);

  position: absolute;

  width: 100%;
  height: 100%;

  top: 20px;
  left: 20px;

  z-index: -10;
`;
