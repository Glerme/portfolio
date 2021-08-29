import Image from 'next/image';

import { Container, Linhas } from './styles';

export const CardImages: React.FC = () => {
  return (
    <Container>
      <Image src="/foto.png" alt="" width={285} height={380} />
      <Linhas />
    </Container>
  );
};
