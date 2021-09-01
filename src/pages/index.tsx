import { NextPage } from 'next';

import { Sobre } from '../components/Layouts/Sobre';
import { Inicio } from '../components/Layouts/Inicio';
import { Habilidades } from '../components/Layouts/Habilidades';

const Home: NextPage = () => {
  return (
    <>
      <Inicio />
      <Sobre />
      <Habilidades />
    </>
  );
};

export default Home;
