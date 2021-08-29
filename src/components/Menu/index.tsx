import Image from 'next/image';

import { MenuItem } from './MenuItem';

import { Container } from './styles';

export const Menu: React.FC = () => {
  return (
    <Container>
      <Image src={'/logo.svg'} width={100} height={100} />

      <MenuItem
        menuItems={[
          {
            label: 'Sobre Mim',
            url: '#sobre',
          },
          {
            label: 'Habilidades',
            url: '#',
          },
          {
            label: 'Projetos',
            url: '#',
          },
          {
            label: 'Contato',
            url: '#',
          },
        ]}
      />
    </Container>
  );
};
