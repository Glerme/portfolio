import { CardContainer } from '../../Containers/CardContainer';
import { Title } from '../../Utilitarios/Title';
import { PageContainer } from '../../Containers/PageContainer';

import { Container } from './styles';

export const Habilidades: React.FC = () => {
  return (
    <div id="habilidades">
      <PageContainer>
        <Title label="Habilidades" />

        <Container>
          <CardContainer />
        </Container>
      </PageContainer>
    </div>
  );
};
