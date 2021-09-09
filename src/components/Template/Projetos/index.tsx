import { Title } from '../../Utilitarios/Title';

import { Container } from './styles';
import { Carrosel } from '../../Utilitarios/Carrosel';
import { CardProjetos } from '../../Cards/CardProjetos';
import { PageContainer } from '../../Layout/PageContainer';

export const Projetos: React.FC = () => {
  const cards = [
    {
      title: 'HTML',
      image: '/telaInicial.png',
      url: 'https://www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'CSS',
      image: '/telaInicial.png',
      url: 'www.google.com.br',
      description: 'lorem ipsum dolor',
    },
  ];

  return (
    <PageContainer id="projetos" title="Projetos">
      <Container>
        <Carrosel
          components={cards.map(card => ({
            component: CardProjetos,
            props: card,
          }))}
        />
      </Container>
    </PageContainer>
  );
};
