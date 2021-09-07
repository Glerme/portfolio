import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  img {
    position: relative;
    border-radius: 10px;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  border: 5px solid var(--green);

  width: 310px;
  height: 410px;

  position: absolute;

  top: 20px;
  left: 20px;

  z-index: 0;
`;
