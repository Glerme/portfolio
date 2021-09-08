import { Container } from './styles';

interface CardLinguagensProps {
  title: string;
  image: string;
}

export const CardLinguagens: React.FC<CardLinguagensProps> = ({
  image,
  title,
}) => {
  return (
    <Container>
      <Container title={title}>
        <img src={image} width={100} height={100} alt={title} />
        <p>{title}</p>
      </Container>
    </Container>
  );
};
