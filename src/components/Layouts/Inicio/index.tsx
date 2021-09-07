import Image from 'next/image';

import { Menu } from '../../Header';
import { Button } from '../../Forms/Button';
import { PageContainer } from '../../Containers/PageContainer';

import { Container } from './styles';

export const Inicio: React.FC = () => {
  return (
    <>
      <Menu />
      <PageContainer>
        <Container>
          <section>
            <h1>
              Olá, me chamo Guilherme
              <span>.</span>
            </h1>

            <div>
              <Button
                label={'Contato'}
                onButtonClick={() => console.log('click')}
              />
            </div>
          </section>

          <Image src={'/meninoComputador.svg'} width={100} height={100} />
        </Container>
      </PageContainer>
    </>
  );
};
