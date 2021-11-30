import { CardProjetosProps } from 'types/CardsTypes';

import { PageContainer } from 'layouts/PageContainer';

import { Carrosel } from 'components/Utilitarios/Carrosel';
import { CardProjetos } from 'components/Cards/CardProjetos';

import { Container } from './styles';

interface ProjetosProps {
  cards: CardProjetosProps[];
}

export const Projetos: React.FC<ProjetosProps> = ({ cards }) => {
  return (
    <PageContainer
      id="projetos"
      title="Projetos"
      style={{ backgroundColor: 'var(--background-secondary)' }}
    >
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
