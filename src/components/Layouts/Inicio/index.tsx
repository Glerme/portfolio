import Image from 'next/image';
import Button from '../../Forms/Button';

import { Container } from './styles';

export const Inicio: React.FC = () => {
  return (
    <Container>
      <section>
        <h1>
          Olá, me chamo Guilherme
          <span>.</span>
        </h1>

        <div>
          <Button
            label={'Contato'}
            onButtonClick={() => console.log('click')}
          />
        </div>
      </section>

      <Image src={'/meninoComputador.svg'} width={500} height={400} />
    </Container>
  );
};
