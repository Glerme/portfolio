import { Title } from '../../Utilitarios/Title';
import { ImageSlider } from '../../Utilitarios/ImageSlider';
import { PageContainer } from '../../Containers/PageContainer';
import { ContainerLinguagens } from '../../Containers/ContainerLinguagens';

import { Container, Content } from './styles';
import { ProjetosContainer } from '../../Containers/ProjetosContainer';

export const Projetos: React.FC = () => {
  const options = [
    { title: 'HTML', url: '/icons/html.svg' },
    { title: 'CSS', url: '/icons/css.svg' },
    { title: 'JavaScript', url: '/icons/js.svg' },
    { title: 'TypeScript', url: '/icons/typescript.svg' },
    { title: 'React JS', url: '/icons/react.svg' },
    { title: 'Electron JS', url: '/icons/electron.svg' },
    { title: 'Next JS', url: '/icons/next.svg' },
    { title: 'Styled Comp.', url: '/icons/styled.svg' },
  ];

  const options2 = [
    { title: 'SASS', url: '/icons/sass.svg' },
    { title: 'Docker', url: '/icons/docker.svg' },
    { title: 'Node JS', url: '/icons/node.svg' },
    { title: 'GraphQL', url: '/icons/graphql.svg' },
    { title: 'Python', url: '/icons/python.svg' },
    { title: 'Figma', url: '/icons/figma.svg' },
  ];

  return (
    <div id="projetos">
      <PageContainer>
        <Title label="Projetos" />

        <Container>
          <Content>
            <ImageSlider
              components={[
                {
                  component: ProjetosContainer,
                  props: {
                    data: options,
                  },
                },
              ]}
            />
          </Content>
        </Container>
      </PageContainer>
    </div>
  );
};
