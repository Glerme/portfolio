import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { useCallback, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../services/prismic';

import { Sobre } from '../components/Template/Sobre';
import { Inicio } from '../components/Template/Inicio';
import { Contato } from '../components/Template/Contato';
import { Projetos } from '../components/Template/Projetos';
import { Habilidades } from '../components/Template/Habilidades';

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
      <Projetos />
      <Contato />

      {/* </ReactPageScroller> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'CardProjeto')],
    {
      fetch: ['cardprojeto.title', 'cardprojeto.description'],
      pageSize: 20,
    },
  );

  const card = response.results.map(post => ({
    title: RichText.asText(post.data.title),
  }));

  console.log(response);
  return {
    props: {},
  };
};

export default Home;
