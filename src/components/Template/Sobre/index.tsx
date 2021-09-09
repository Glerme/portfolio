import { CardImg } from '../../Cards/CardImg';
import { Title } from '../../Utilitarios/Title';

import { Container, Contato, Content, TextContainer } from './styles';

export const Sobre: React.FC = () => {
  return (
    <Container id="sobre">
      {/* <Title label="Sobre Mim" /> */}

      <Content>
        <div>
          <CardImg />
        </div>

        <TextContainer>
          <p>
            Olá, meu nome é Guilherme <span>.</span>
          </p>

          <br />

          <p>
            Nascido e criado na cidade de Pederneiras, interior de São Paulo.
            Curso o curso de Ciência da Computação na Universidade UNIP de
            Bauru. Interessado na área de técnologia desde muito cedo, com
            incentivo de minha família, ingressei na área a um ano e meio.
            Possuo conhecimento na área de desenvolvimento Front-end e mobile.
          </p>

          <Contato>
            <div>
              <span>Nome</span>
              <p>Guilherme Felipe de Lima Godoi</p>
            </div>

            <div>
              <span>Cidade</span>
              <p>Pederneiras</p>
            </div>

            <div>
              <span>Email</span>
              <p>guiggff@gmail.com</p>
            </div>

            <div>
              <span>Contato</span>
              <p>(14) 99836-3749</p>
            </div>
          </Contato>
        </TextContainer>
      </Content>
    </Container>
  );
};
