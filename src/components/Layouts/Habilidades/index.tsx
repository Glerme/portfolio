import { Title } from '../../Utilitarios/Title';
import { CardContainer } from '../../Containers/CardContainer';
import { PageContainer } from '../../Containers/PageContainer';

import { Container } from './styles';

export const Habilidades: React.FC = () => {
  return (
    <div id="habilidades">
      <Title label="Habilidades" />
      <PageContainer>
        <Container>
          <CardContainer />
        </Container>
      </PageContainer>
    </div>
  );
};
