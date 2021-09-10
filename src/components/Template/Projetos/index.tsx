import { CardProjetosProps } from '../../../types/CardProjetoProps';

import { Carrosel } from '../../Utilitarios/Carrosel';
import { CardProjetos } from '../../Cards/CardProjetos';
import { PageContainer } from '../../Layout/PageContainer';

import { Container } from './styles';

interface ProjetosProps {
  cards: CardProjetosProps[];
}

export const Projetos: React.FC<ProjetosProps> = ({ cards }) => {
  console.log('cards', cards);

  return (
    <PageContainer id="projetos" title="Projetos">
      <Container>
        <Carrosel
          components={cards.map(card => ({
            component: CardProjetos,
            props: {
              data: card,
            },
          }))}
        />
      </Container>
    </PageContainer>
  );
};
