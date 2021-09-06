import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';

interface CardProps {
  title: string;
  image: string;
  url: string;
}

interface ProjetosContainerProps {
  data: CardProps[];
}

export const ProjetosContainer: React.FC<ProjetosContainerProps> = ({
  data,
}) => {
  return (
    <Container
      target="_blank"
      href="https://twitter.com/"
      rel="noopener noreferrer"
      title={'teste'}
    >
      <img src={'/telaInicial.png'} width={100} height={100} alt={'teste'} />
    </Container>
  );
};
