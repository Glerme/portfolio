import { NextPage } from 'next';

import { Sobre } from '../components/Layouts/Sobre';
import { Inicio } from '../components/Layouts/Inicio';

const Home: NextPage = () => {
  return (
    <>
      <Inicio />
      <Sobre />
    </>
  );
};

export default Home;
