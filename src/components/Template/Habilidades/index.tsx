import { Title } from '../../Utilitarios/Title';

import { Container, Linhas } from './styles';
import { Carrosel } from '../../Utilitarios/Carrosel';
import { CardLinguagens } from '../../Cards/CardLinguagens';
import { PageContainer } from '../../Layout/PageContainer';

export const Habilidades: React.FC = () => {
  const images = [
    { title: 'HTML', image: '/icons/html.svg' },
    { title: 'CSS', image: '/icons/css.svg' },
    { title: 'JavaScript', image: '/icons/js.svg' },
    { title: 'TypeScript', image: '/icons/typescript.svg' },
    { title: 'React JS', image: '/icons/react.svg' },
    { title: 'Styled Comp.', image: '/icons/styled.svg' },
    { title: 'Electron JS', image: '/icons/electron.svg' },
    { title: 'Next JS', image: '/icons/next.svg' },
    { title: 'SASS', image: '/icons/sass.svg' },
    { title: 'Docker', image: '/icons/docker.svg' },
    { title: 'Node JS', image: '/icons/node.svg' },
    { title: 'Python', image: '/icons/python.svg' },
    { title: 'GraphQL', image: '/icons/graphql.svg' },
    { title: 'Figma', image: '/icons/figma.svg' },
  ];

  return (
    <PageContainer title="Habilidades">
      <Container>
        <main>
          <Carrosel
            components={images.map(imagem => ({
              component: CardLinguagens,
              props: imagem,
            }))}
          />
        </main>
        <Linhas />
      </Container>
    </PageContainer>
  );
};
