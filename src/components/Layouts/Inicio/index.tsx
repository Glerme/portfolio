import Image from 'next/image';
import { PageContainer } from '../../Containers/PageContainer';
import Button from '../../Forms/Button';
import { Menu } from '../../Menu';

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

          <Image src={'/meninoComputador.svg'} width={500} height={400} />
        </Container>
      </PageContainer>
    </>
  );
};
