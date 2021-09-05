import { CardLinguagens } from '../../Cards/CardLinguagens';
import { ImageSlider } from '../../Utilitarios/ImageSlider';
import { ContainerLinguagens } from '../ContainerLinguagens';
import { Container, Linhas } from './styles';

export const CardContainer: React.FC = () => {
  const options = [
    { title: 'HTML', url: '/html.svg' },
    { title: 'CSS', url: '/css.svg' },
    { title: 'JavaScript', url: '/js.svg' },
    { title: 'TypeScript', url: '/typescript.svg' },
    { title: 'React JS', url: '/react.svg' },
    { title: 'Next JS', url: '/next.svg' },
    { title: 'SASS.', url: '/sass.svg' },
    { title: 'Styled Comp.', url: '/styled.svg' },
  ];

  const options2 = [
    { title: 'Docker', url: '/docker.svg' },
    { title: 'Node JS', url: '/node.svg' },
    { title: 'GraphQL', url: '/graphql.svg' },
    { title: 'Python', url: '/python.svg' },
  ];

  return (
    <Container>
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
          ]}
        />
      </main>
      <Linhas />
    </Container>
  );
};
