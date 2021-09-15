import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid var(--blue);
  border-radius: 10px;

  background-color: var(--container);

  position: relative;

  margin-bottom: 4rem;

  width: 100%;
  height: 100%;

  ${mq({
    padding: ['0', '0', '2rem'],
    height: ['', '100%', '100%'],
  })}

  main {
    grid-template-columns: 1fr 1fr;

    position: relative;
    background-color: var(--container);

    border-radius: 10px;

    width: 100%;

    z-index: 1000005;

    ${mq({
      display: ['flex', 'flex', 'grid'],
      'justify-content': ['center', 'center'],
      'flex-direction': ['column-reverse'],
    })}

    form {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.25rem;

      width: 100%;
      height: 100%;

      ${mq({
        padding: ['.5rem', '1rem', '0'],
      })}
    }
  }
`;

export const RedesSociais = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    ${mq({
      'margin-top': ['1rem', '1rem', '0'],
    })}
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    ${mq({
      'grid-template-columns': ['1fr 1fr', 'repeat(3, 1fr)', '1fr 1fr'],
    })}
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 3px solid var(--green);

  position: absolute;

  width: 100%;
  height: 100%;

  top: 12px;
  left: 12px;

  z-index: -10;
`;
