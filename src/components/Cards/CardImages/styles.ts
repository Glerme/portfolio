import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  position: relative;

  img {
    border-radius: 10px;
    z-index: 15;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  border: 5px solid var(--green);

  width: 300px;
  height: 410px;

  position: absolute;

  top: 20px;
  left: 30px;

  z-index: 0;
`;
