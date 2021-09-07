import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Pager = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  position: absolute;

  right: -110px;

  button {
    width: 8px;
    height: 40px;

    border-radius: 10px;
    border: 0;

    transition: background-color 0.5s;

    &.active {
      background-color: var(--green);
    }
  }
`;
