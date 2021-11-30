import { useState } from 'react';

import { FiMenu } from 'react-icons/fi';

import { MenuList } from '../../components/Menu/MenuList';

import { Container, MenuButton, Header } from './styles';

export const PageHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Header isMenuOpen={isMenuOpen}>
        <img src={'/logo.svg'} alt="Logo" title="Logo" />

        <MenuList
          items={[
            {
              label: 'Sobre',
              url: '#sobre',
            },
            {
              label: 'Habilidades',
              url: '#habilidades',
            },
            {
              label: 'Projetos',
              url: '#projetos',
            },
            {
              label: 'Contato',
              url: '#contato',
            },
          ]}
        />

        <MenuButton type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FiMenu size={24} />
        </MenuButton>
      </Header>
    </Container>
  );
};
