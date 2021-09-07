import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  textarea {
    padding: 0.5rem 1rem;

    width: 100%;
    border: 0;
    border-radius: 8px;

    height: 100px;
    max-height: 100px;
    min-width: 300px;
    resize: vertical;
  }
`;
