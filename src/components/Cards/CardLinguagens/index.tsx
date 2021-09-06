import Image from 'next/image';

import { Container } from './styles';

interface CardLinguagensProps {
  title: string;
  url: string;
}

export const CardLinguagens: React.FC<CardLinguagensProps> = ({
  url,
  title,
}) => {
  return (
    <Container title={title}>
      <Image src={url} width={100} height={100} alt={title} />
      <p>{title}</p>
    </Container>
  );
};
