import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

export const LinkContainer = styled.div`
  border-radius: 15px;

  position: relative;

  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);

  margin: 1.5rem;

  width: 300px;
  height: 200px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    cursor: pointer;

    z-index: 10;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
