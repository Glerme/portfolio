import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';

import ReactPageScroller from 'react-page-scroller';

import { Sobre } from '../components/Layouts/Sobre';
import { Inicio } from '../components/Layouts/Inicio';
import { Habilidades } from '../components/Layouts/Habilidades';

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

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(<button key={i}>{i}</button>);
    }

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  return (
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
    </ReactPageScroller>
  );
};

export default Home;
