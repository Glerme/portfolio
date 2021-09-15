import { useCallback, useEffect, useState } from 'react';

import { Fade } from 'react-awesome-reveal';

import { Button } from '../../Forms/Button';
import { PageContainer } from '../../Layout/PageContainer';

import { Container } from './styles';

export const Inicio: React.FC = () => {
  const [title, setTitle] = useState([]);

  const text = 'Olá, me chamo Guilherme';
  let cont = 0;

  const typewriter = useCallback(() => {
    if (cont < text.length) {
      setTitle(state => [...state, text.charAt(cont)]);

      console.log(text.charAt(cont));
      cont++;

      setTimeout(typewriter, 150);
    }
  }, []);

  useEffect(() => typewriter(), []);

  return (
    <PageContainer>
      <Container>
        <Fade direction="down">
          <section>
            <h1>
              {title}
              <span>.</span>
            </h1>

            <Button
              label={'Contato'}
              onButtonClick={() => console.log('click')}
            />
          </section>
          <img src={'/meninoComputador.svg'} />
        </Fade>
      </Container>
    </PageContainer>
  );
};
