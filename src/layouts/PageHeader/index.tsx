import { useState } from 'react';
import Image from 'next/image';

import { Logo, MenuMobile, NavButtons, NavContainer } from './styles';

export const PageHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavContainer>
      <nav>
        <Logo>
          <figure>
            <Image
              src={'/logo.svg'}
              alt="Logo"
              title="Logo"
              width={100}
              height={80}
            />
          </figure>
        </Logo>

        <NavButtons isMenuOpen={isMenuOpen}>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </NavButtons>
      </nav>

      <MenuMobile
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
        title="Menu"
      >
        <div></div>
      </MenuMobile>
    </NavContainer>
  );
};
