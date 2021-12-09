import Image from 'next/image';
import Router from 'next/router';

import { Button } from 'components/Forms/Button';

import { ContainerError } from './styles';

export const ErrorView: React.FC = () => {
  return (
    <ContainerError>
      <section>
        <Image src={'/meninoComputador.svg'} width={500} height={400} />
        <h1>Ocorreu um erro</h1>
        <div>
          <Button
            label="Voltar"
            onClick={() => {
              Router.back();
            }}
          />
        </div>
      </section>
    </ContainerError>
  );
};
