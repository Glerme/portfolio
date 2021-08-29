import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  width: 285px;
  height: 380px;

  position: relative;

  img {
    border-radius: 10px;
    z-index: 1;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 5px solid var(--green);

  width: 285px;
  height: 380px;

  position: absolute;

  top: 12px;
  left: 12px;

  z-index: 0;
`;
