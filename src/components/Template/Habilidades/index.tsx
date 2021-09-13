import { CardHabilidadesProps } from '../../../types/CardsTypes';

import { Carrosel } from '../../Utilitarios/Carrosel';
import { PageContainer } from '../../Layout/PageContainer';
import { CardLinguagens } from '../../Cards/CardLinguagens';

import { Container, Linhas } from './styles';

interface HabilidadesProps {
  cards: CardHabilidadesProps[];
}

export const Habilidades: React.FC<HabilidadesProps> = ({ cards }) => {
  return (
    <PageContainer title="Habilidades" id="habilidades">
      <Container>
        <section>
          <Carrosel>
            {cards.map(({ image, title }, index) => (
              <CardLinguagens image={image.url} title={title} key={index} />
            ))}
          </Carrosel>
        </section>
        <Linhas />
      </Container>
    </PageContainer>
  );
};
