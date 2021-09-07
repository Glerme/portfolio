import { NextPage } from 'next';

import { Menu } from '../components/Header';
import { Template } from '../components/Template';

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <Template />
    </>
  );
};

export default Home;
