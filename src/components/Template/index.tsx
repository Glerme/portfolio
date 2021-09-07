import { useCallback, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import { Sobre } from '../Layouts/Sobre';
import { Inicio } from '../Layouts/Inicio';
import { Contato } from '../Layouts/Contato';
import { Projetos } from '../Layouts/Projetos';
import { Habilidades } from '../Layouts/Habilidades';

export const Template: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = useCallback(
    number => {
      setCurrentPage(number);
    },
    [currentPage],
  );

  const handleBeforePageChange = number => {
    console.log(number);
  };

  // const getPagesNumbers = () => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= 5; i++) {
  //     pageNumbers.push(<button key={i}>{i}</button>);
  //   }

  //   return [...pageNumbers];
  // };

  return (
    <>
      <ReactPageScroller
        animationTimerBuffer={0}
        blockScrollDown={false}
        blockScrollUp={false}
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Inicio />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </ReactPageScroller>
    </>
  );
};
