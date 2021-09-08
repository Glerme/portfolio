import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 2rem 5rem;

  border: 1px solid red;

  width: 100%;

  min-height: 450px;

  z-index: 1;

  main {
    background-color: var(--container);

    border-radius: 10px;

    min-height: 450px;

    width: 100%;
    height: 100%;

    margin: 1rem;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  position: absolute;

  width: 100%;
  height: 100%;

  top: 0px;
  left: 0px;

  z-index: 0;
`;
