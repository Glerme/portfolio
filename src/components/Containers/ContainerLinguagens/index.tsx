import { CardLinguagens } from '../../Cards/CardLinguagens';

import { Container } from './styles';

interface CardProps {
  title: string;
  url: string;
}

interface ContainerLinguagensProps {
  data: CardProps[];
}

export const ContainerLinguagens: React.FC<ContainerLinguagensProps> = ({
  data,
}) => {
  return (
    <Container>
      {data.map(c => (
        <CardLinguagens url={c.url} title={c.title} key={c.title} />
      ))}
    </Container>
  );
};
