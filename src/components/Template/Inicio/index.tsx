import { Button } from '../../Forms/Button';
import { PageContainer } from '../../Layout/PageContainer';

import { Container } from './styles';

export const Inicio: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <section>
          <h1>
            Olá, me chamo Guilherme
            <span>.</span>
          </h1>

          <Button
            label={'Contato'}
            onButtonClick={() => console.log('click')}
          />
        </section>
        <img src={'/meninoComputador.svg'} />
      </Container>
    </PageContainer>
  );
};
