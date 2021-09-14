import { GetStaticProps, NextPage } from 'next';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import { CardHabilidadesProps, CardProjetosProps } from '../types/CardsTypes';

import { baseUrl } from '../utils/axios';

import { getPrismicClient } from '../services/prismic';

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
  const [{ data: projetos }, { data: habilidades }] = await Promise.all([
    baseUrl.get('api/projetos'),
    baseUrl.get('api/habilidades'),
  ]);

  return {
    props: {
      cardProjetos: projetos,
      cardHabilidades: habilidades,
    },
  };
};

export default Home;
