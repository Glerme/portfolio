import { Container, Linhas } from './styles';

export const CardImg: React.FC = () => {
  return (
    <Container title="Guilherme Felipe">
      <Linhas />
      <img src="/foto.png" alt="Imagem do Card" />
    </Container>
  );
};
