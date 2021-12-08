import { useState } from 'react';
import Image from 'next/image';

import { FiMenu } from 'react-icons/fi';

import { MenuList } from '../../components/Menu/MenuList';

import { Container, MenuButton, Header } from './styles';

export const PageHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Container>
      <Header isMenuOpen={isMenuOpen}>
        <div>
          <Image
            src={'/logo.svg'}
            alt="Logo"
            title="Logo"
            width={100}
            height={80}
          />
        </div>

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

        <MenuButton
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isMenuOpen={isMenuOpen}
        >
          <FiMenu size={24} />
        </MenuButton>
      </Header>
    </Container>
  );
};
