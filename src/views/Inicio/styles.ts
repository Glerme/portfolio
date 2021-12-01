import styled, { keyframes } from 'styled-components';

import { breakpoints } from 'styles/breakpoints';

export const animationTypeWriter = keyframes`
 0% {
    opacity: 0;
    transition: all 0.2s;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid red;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 2rem;

    @media ${breakpoints.md} {
      flex-direction: row;
    }
  }
`;

export const SectionCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  border: 1px solid blue;
`;

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column-reverse;

//   gap: 2rem;

//   width: 100;
//   height: 75vh;

//   border: 1px solid blue;

//   @media ${breakpoints.md} {
//     flex-direction: row;
//   }

//   img {
//     width: 100%;
//   }

//   section {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: flex-start;

//     border: 1px solid red;

//     div {
//       display: grid;
//       place-content: center;

//       min-width: 200px;

//       height: 100%;
//       width: 100%;

//       h1 {
//         text-align: center;
//         font-size: 2rem;
//         margin-bottom: 1rem;

//         @media ${breakpoints.md} {
//           text-align: left;
//         }

//         &::after {
//           content: '|';
//           margin-left: 3px;
//           opacity: 1;
//           animation: ${animationTypeWriter} 0.7s infinite;
//         }
//       }
//     }

//     span {
//       font-size: 3.125rem;
//       color: var(--green);
//     }

//     & > a {
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       border: 0;
//       border-radius: 5px;

//       background-color: var(--green);
//       color: var(--white);

//       font-size: 1rem;
//       font-weight: 600;

//       width: 100%;
//       height: 3rem;

//       &:active {
//         transform: translate(2px, 3px);
//       }
//     }
//   }
// `;
