import { Title } from '../../Utilitarios/Title';
import { PageContainer } from '../../Containers/PageContainer';

import { Container, ContainerForm, Linhas, RedesSociais } from './styles';
import { Input } from '../../Forms/Input';
import { TextArea } from '../../Forms/TextArea';
import { Button } from '../../Forms/Button';
import { CardRedesSociais } from '../../Cards/CardRedesSociais';

export const Contato: React.FC = () => {
  return (
    <PageContainer>
      <Title label="Contato" />
      <Container>
        <ContainerForm>
          <h2>Entre em Contato!</h2>

          <Input label="Nome" name="name" />
          <Input label="Email" name="email" type="email" />
          <TextArea label="Mensagem" name="name" />

          <Button
            label="Enviar"
            onButtonClick={() => console.log()}
            type="submit"
          />
        </ContainerForm>

        <RedesSociais>
          <h2>Minhas Redes Sociais</h2>
          <div>
            <CardRedesSociais />
            <CardRedesSociais />
            <CardRedesSociais />
            <CardRedesSociais />
            <CardRedesSociais />
            <CardRedesSociais />
          </div>
        </RedesSociais>
      </Container>
    </PageContainer>
  );
};
