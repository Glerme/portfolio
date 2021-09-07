import styled from 'styled-components';

import facepaint from 'facepaint';

import { breakpoints } from '../../../styles/global';

const mq = facepaint(breakpoints);

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${mq({
    'grid-template-columns': ['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
  })}
`;

export const Content = styled.a`
  display: flex;
  align-items: flex-end;

  background-color: transparent;
  border-radius: 15px;

  margin: 1rem;
  position: relative;

  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);

  width: 260px;
  height: 200px;

  ${mq({
    width: ['350px', '300', '260px'],
  })}

  &:hover {
    transform: translateY(20px);

    &:before {
      opacity: 1;
    }

    div {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
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
    position: relative;
    z-index: 3;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;

    background-color: var(--black-800);

    border-radius: 0 0 16px 16px;

    padding: 1rem;

    width: 100%;

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
