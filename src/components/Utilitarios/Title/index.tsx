import { Container } from './styles';

interface TitleProps {
  label: string;
}

export const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <Container>
      <h1>{label}</h1>
      <p>{label}</p>
    </Container>
  );
};
