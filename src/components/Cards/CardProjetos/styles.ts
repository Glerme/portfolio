import styled from 'styled-components';

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: 0.4s ease-out;

  width: 100%;
  height: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 1rem;

    position: relative;

    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;

      margin: 1rem;
    }
  }

  &:hover {
    &:before {
      opacity: 1;
    }

    div {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &:before {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    transition: 0.5s;
    opacity: 0;

    z-index: 2;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: absolute;

    padding: 2rem;

    z-index: 3;
    opacity: 0;
    transition: 0.5s;

    background-color: rgba(0, 0, 0, 0.6);

    width: 100%;
    height: 100%;

    h1 {
      margin: 0px;
    }

    p {
      letter-spacing: 1px;
      font-size: 15px;
      margin-top: 8px;
    }
  }
`;
