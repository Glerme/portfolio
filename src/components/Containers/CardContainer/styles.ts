import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  height: 450px;

  main {
    padding: 2rem 5rem;

    border-radius: 10px;

    background-color: var(--container);

    min-height: 450px;

    z-index: 1;
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

  top: 12px;
  left: 12px;

  z-index: 0;
`;
