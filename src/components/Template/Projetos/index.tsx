import { CardProjetosProps } from '../../../types/CardProjetoProps';

import { Carrosel } from '../../Utilitarios/Carrosel';
import { CardProjetos } from '../../Cards/CardProjetos';
import { PageContainer } from '../../Layout/PageContainer';

import { Container } from './styles';

interface ProjetosProps {
  cards: CardProjetosProps[];
}

export const Projetos: React.FC<ProjetosProps> = ({ cards }) => {
  return (
    <PageContainer id="projetos" title="Projetos">
      <Container>
        <Carrosel>
          {cards.map(card => (
            <CardProjetos key={card.uid} data={card} />
          ))}
        </Carrosel>
      </Container>
    </PageContainer>
  );
};
