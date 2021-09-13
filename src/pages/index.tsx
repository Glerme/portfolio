import { GetStaticProps, NextPage } from 'next';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../services/prismic';

import { CardHabilidadesProps, CardProjetosProps } from '../types/CardsTypes';

import { Sobre } from '../components/Template/Sobre';
import { Inicio } from '../components/Template/Inicio';
import { Contato } from '../components/Template/Contato';
import { Projetos } from '../components/Template/Projetos';
import { Habilidades } from '../components/Template/Habilidades';
import { ButtonToTop } from '../components/Utilitarios/ButtonToTop';

interface HomeProps {
  cardProjetos: CardProjetosProps[];
  cardHabilidades: CardHabilidadesProps[];
}

const Home: NextPage<HomeProps> = ({ cardProjetos, cardHabilidades }) => {
  return (
    <>
      <Inicio />
      <Sobre />
      <Habilidades cards={cardHabilidades} />
      <Projetos cards={cardProjetos} />
      <Contato />
      <ButtonToTop />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.any('document.type', ['projetos', 'habilidades'])],
    {
      pageSize: 100,
      page: 1,
    },
  );

  const cardProjetos = response.results
    .filter(resposta => resposta.type === 'projetos')
    .sort((a, b) =>
      a.first_publication_date > b.first_publication_date ? 1 : -1,
    );

  const cardHabilidades = response.results
    .filter(resposta => resposta.type === 'habilidades')
    .sort((a, b) =>
      a.first_publication_date > b.first_publication_date ? 1 : -1,
    );

  const parsedCardProjetos = cardProjetos.map(post => ({
    uid: post.uid,
    title: RichText.asText(post.data.title),
    url: post.data.url,
    image: post.data.image,
    text: RichText.asText(post.data.text),
  }));

  const parsedCardHabilidades = cardHabilidades.map(post => ({
    uid: post.uid,
    title: RichText.asText(post.data.title),
    image: post.data.image,
  }));

  return {
    props: {
      cardProjetos: parsedCardProjetos,
      cardHabilidades: parsedCardHabilidades,
    },
  };
};

export default Home;
