import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;

  margin-bottom: 3rem;

  .slick-dots {
    margin: 1rem 0 0 0;

    button::before {
      font-size: 1rem;
      color: var(--green);
    }
  }

  .slick-dots li.slick-active button:before {
    color: var(--green);
  }
`;
