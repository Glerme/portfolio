import { Title } from '../../Utilitarios/Title';
import { CardContainer } from '../../Containers/CardContainer';

import { Container, Content, Linhas } from './styles';
import { ImageSlider } from '../../Utilitarios/ImageSlider';
import { ContainerLinguagens } from '../../Containers/ContainerLinguagens';

export const Habilidades: React.FC = () => {
  const options = [
    { title: 'HTML', url: '/icons/html.svg' },
    { title: 'CSS', url: '/icons/css.svg' },
    { title: 'JavaScript', url: '/icons/js.svg' },
    { title: 'TypeScript', url: '/icons/typescript.svg' },
    { title: 'React JS', url: '/icons/react.svg' },
    { title: 'Styled Comp.', url: '/icons/styled.svg' },
  ];

  const options2 = [
    { title: 'Electron JS', url: '/icons/electron.svg' },
    { title: 'Next JS', url: '/icons/next.svg' },
    { title: 'SASS', url: '/icons/sass.svg' },
    { title: 'Docker', url: '/icons/docker.svg' },
    { title: 'Node JS', url: '/icons/node.svg' },
    { title: 'Python', url: '/icons/python.svg' },
  ];

  const options3 = [
    { title: 'GraphQL', url: '/icons/graphql.svg' },
    { title: 'Figma', url: '/icons/figma.svg' },
  ];

  return (
    <Container id="habilidades">
      <Title label="Habilidades" />
      <Content>
        <Linhas />
        <main>
          <ImageSlider
            components={[
              {
                component: ContainerLinguagens,
                props: {
                  data: options,
                },
              },
              {
                component: ContainerLinguagens,
                props: {
                  data: options2,
                },
              },
              {
                component: ContainerLinguagens,
                props: {
                  data: options3,
                },
              },
            ]}
          />
        </main>
      </Content>
    </Container>
  );
};
