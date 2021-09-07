import { Title } from '../../Utilitarios/Title';
import { CardContainer } from '../../Containers/CardContainer';

import { Container } from './styles';

export const Habilidades: React.FC = () => {
  return (
    <div id="habilidades">
      <Title label="Habilidades" />
      <Container>
        <CardContainer />
      </Container>
    </div>
  );
};
