import { NextPage } from 'next';
import { useCallback, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { Contato } from '../components/Template/Contato';

import { Habilidades } from '../components/Template/Habilidades';
import { Inicio } from '../components/Template/Inicio';
import { Projetos } from '../components/Template/Projetos';
import { Sobre } from '../components/Template/Sobre';

const Home: NextPage = () => {
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

  return (
    <>
      {/* <ReactPageScroller
        animationTimerBuffer={0}
        blockScrollDown={false}
        blockScrollUp={false}
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      > */}
      <Inicio />
      <Sobre />
      <Habilidades />
      {/* 
      <Projetos />
      <Contato /> */}
      {/* </ReactPageScroller> */}
    </>
  );
};

export default Home;
