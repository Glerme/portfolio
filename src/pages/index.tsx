import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

import { CardHabilidadesProps, CardProjetosProps } from '../types/CardsTypes';

import { baseUrl } from '../utils/axios';

import { Sobre } from '../components/Template/Sobre';
import { Inicio } from '../components/Template/Inicio';
import { Contato } from '../components/Template/Contato';
import { Projetos } from '../components/Template/Projetos';
import { Habilidades } from '../components/Template/Habilidades';
import { ButtonToTop } from '../components/Utilitarios/ButtonToTop';

interface HomeProps {
  projetos?: CardProjetosProps[];
  habilidades?: CardHabilidadesProps[];
}

const Home: NextPage<HomeProps> = ({ projetos, habilidades }) => {
  return (
    <>
      <Inicio />
      <Sobre />
      <Habilidades cards={habilidades} />
      <Projetos cards={projetos} />
      <Contato />
      <ButtonToTop />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [{ data: projetos }, { data: habilidades }] = await Promise.all([
      baseUrl.get('api/projetos'),
      baseUrl.get('api/habilidades'),
    ]);

    return {
      props: {
        projetos,
        habilidades,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
};

export default Home;
