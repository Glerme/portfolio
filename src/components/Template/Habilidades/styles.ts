import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--container);
  border-radius: 10px;

  position: relative;

  padding: 2rem 5rem;

  width: 100%;

  min-height: 450px;

  z-index: 1;

  main {
    border: 1px solid green;

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
