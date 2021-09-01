import Image from 'next/image';

import { Container } from './styles';

export const CardLinguagens: React.FC = () => {
  return (
    <Container>
      <Image src={'/html.svg'} width={120} height={120} />
      <p>HTML</p>
    </Container>
  );
};
