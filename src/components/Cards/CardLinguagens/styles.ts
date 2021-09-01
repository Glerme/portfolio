import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--black-500);
  border-radius: 10px;
  border: 0;

  padding: 1rem;

  transition: border 1s;

  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;

  p {
    font-weight: 500;
  }

  &:hover {
    /* border: 1px solid var(--green);

    */

    transition: 1s ease-in-out;
    background: #4f95da;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  }
`;
