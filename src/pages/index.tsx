import { useCallback, useState } from 'react';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

import ReactPageScroller from 'react-page-scroller';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../services/prismic';

import { CardProjetosProps } from '../types/CardProjetoProps';

import { Sobre } from '../components/Template/Sobre';
import { Inicio } from '../components/Template/Inicio';
import { Contato } from '../components/Template/Contato';
import { Projetos } from '../components/Template/Projetos';
import { Habilidades } from '../components/Template/Habilidades';

interface HomeProps {
  cardProjetos: CardProjetosProps[];
}

const Home: NextPage<HomeProps> = ({ cardProjetos }) => {
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

  console.log(cardProjetos);

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
      <Projetos cards={cardProjetos} />
      <Contato />

      {/* </ReactPageScroller> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'projetos')],
    {},
  );

  const cardProjetos = response.results.map(post => ({
    uid: post.uid,
    title: RichText.asText(post.data.title),
    url: post.data.url,
    image: post.data.image,
    text: RichText.asText(post.data.text),
  }));

  return {
    props: {
      cardProjetos,
    },
  };
};

export default Home;
