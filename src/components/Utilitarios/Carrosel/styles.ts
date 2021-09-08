import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 3rem;

  .slick-dots {
    margin: 2rem 0 0;

    button::before {
      font-size: 1rem;
      color: var(--green);
    }
  }

  .slick-dots li.slick-active button:before {
    color: var(--green);
  }
`;
