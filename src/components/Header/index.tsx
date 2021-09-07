import Image from 'next/image';

import { MenuItem } from './MenuItem';

import { Container } from './styles';

export const Menu: React.FC = () => {
  return (
    <Container>
      <img src={'/logo.svg'} alt="Logo" title="Logo" />

      <MenuItem
        menuItems={[
          {
            label: 'Sobre Mim',
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
    </Container>
  );
};
