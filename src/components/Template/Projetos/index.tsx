import { Title } from '../../Utilitarios/Title';
import { ImageSlider } from '../../Utilitarios/ImageSlider';
import { ProjetosContainer } from '../../Containers/ProjetosContainer';

import { Content, Container } from './styles';

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
    </Container>
  );
};
