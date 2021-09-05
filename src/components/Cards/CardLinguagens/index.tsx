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
    <Container>
      <Image src={url} width={120} height={120} />
      <p>{title}</p>
    </Container>
  );
};
