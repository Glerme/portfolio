import { Title } from '../../Utilitarios/Title';
import { ImageSlider } from '../../Utilitarios/ImageSlider';
import { PageContainer } from '../../Containers/PageContainer';

import { Content, Container } from './styles';
import { ProjetosContainer } from '../../Containers/ProjetosContainer';

export const Projetos: React.FC = () => {
  const options = [
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
  ];

  const options2 = [
    {
      title: 'HTML',
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
    <Container id="projetos">
      <PageContainer>
        <Title label="Projetos" />

        <Content>
          <ImageSlider
            components={[
              {
                component: ProjetosContainer,
                props: {
                  data: options,
                },
              },
              {
                component: ProjetosContainer,
                props: {
                  data: options2,
                },
              },
            ]}
          />
        </Content>
      </PageContainer>
    </Container>
  );
};
