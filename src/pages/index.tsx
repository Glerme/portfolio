import { GetServerSideProps, NextPage } from 'next';

import { CardHabilidadesProps, CardProjetosProps } from '../types/CardsTypes';

import { baseUrl } from '../utils/axios';
import { ButtonToTop } from '../components/Utilitarios/ButtonToTop';

import { Sobre } from '../views/Sobre';
import { Inicio } from '../views/Inicio';
import { Contato } from '../views/Contato';
import { Projetos } from '../views/Projetos';
import { Habilidades } from '../views/Habilidades';

interface HomeProps {
  projetos?: CardProjetosProps[];
  habilidades?: CardHabilidadesProps[];
}

const Home: NextPage<HomeProps> = ({ projetos, habilidades }) => {
  return (
    <>
      <Inicio />
      {/* <Sobre /> */}
      {/* <Habilidades cards={habilidades} /> */}
      {/*
      <Projetos cards={projetos} />
      <Contato />
      <ButtonToTop /> */}
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
