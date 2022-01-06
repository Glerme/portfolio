import Image from 'next/image';
import Router from 'next/router';

import { Button } from 'components/Forms/Button';

import { ContainerError } from './styles';

interface ErrorViewProps {
  errorMessage?: string;
}

export const ErrorView: React.FC<ErrorViewProps> = ({ errorMessage }) => {
  return (
    <ContainerError>
      <section>
        <Image src={'/meninoComputador.svg'} width={500} height={400} />
        <h1>{errorMessage || 'Ocorreu um erro'}</h1>
        <div>
          <Button
            label="Voltar"
            onClick={() => {
              Router.push('/');
            }}
          />
        </div>
      </section>
    </ContainerError>
  );
};
