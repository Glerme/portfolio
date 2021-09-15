import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-bottom: 3rem;

  .slick-dots {
    bottom: -3rem;

    button::before {
      font-size: 1rem;
      color: var(--green);
    }
  }

  .slick-dots li.slick-active button:before {
    color: var(--green);
  }
`;
