import { NextPage } from 'next';

import { Menu } from '../components/Menu';
import { Inicio } from '../components/Layouts/Inicio';
import { PageContainer } from '../components/Containers/PageContainer';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Menu />
      <Inicio />
    </PageContainer>
  );
};

export default Home;
