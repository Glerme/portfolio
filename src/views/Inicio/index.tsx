import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { Container, SectionCard } from './styles';

export const Inicio: React.FC = () => {
  const [title, setTitle] = useState([]);

  const text = 'Olá, me chamo Guilherme';
  let cont = 0;

  const typewriter = useCallback(() => {
    if (cont < text.length) {
      setTitle(state => [...state, text.charAt(cont)]);

      cont++;

      setTimeout(typewriter, 150);
    }
  }, []);

  useEffect(() => typewriter(), []);

  return (
    <Container>
      <div>
        <SectionCard>
          <div>
            <h1>
              {title}
              <span>.</span>
            </h1>
          </div>

          <a
            href="./curriculo/Curriculo.pdf"
            download="Curriculo.pdf"
            target="_blank"
          >
            Visualize meu currículo!
          </a>
        </SectionCard>

        <SectionCard>
          <Image
            src={'/meninoComputador.svg'}
            width={600}
            height={400}
            alt="Menino no computador"
          />
        </SectionCard>
      </div>
    </Container>
  );
};
