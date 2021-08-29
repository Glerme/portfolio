import { Title } from '../../Utilitarios/Title';
import { CardImages } from '../../Cards/CardImages';
import { PageContainer } from '../../Containers/PageContainer';

import { Container, Contato, Content, TextContainer } from './styles';

export const Sobre: React.FC = () => {
  return (
    <Container id="sobre">
      <PageContainer>
        <Title label="Sobre Mim" />

        <Content>
          <div>
            <CardImages />
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

              <footer>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Glerme"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 27.5V22.6625C20.0469 22.0665 19.9664 21.4673 19.7638 20.9048C19.5612 20.3423 19.2412 19.8293 18.825 19.4C22.75 18.9625 26.875 17.475 26.875 10.65C26.8747 8.90483 26.2034 7.22654 25 5.96254C25.5698 4.43568 25.5295 2.74798 24.8875 1.25004C24.8875 1.25004 23.4125 0.812544 20 3.10004C17.135 2.32357 14.115 2.32357 11.25 3.10004C7.8375 0.812544 6.3625 1.25004 6.3625 1.25004C5.72047 2.74798 5.68018 4.43568 6.25 5.96254C5.03766 7.23592 4.36565 8.92937 4.375 10.6875C4.375 17.4625 8.5 18.95 12.425 19.4375C12.0137 19.8625 11.6966 20.3693 11.4941 20.9249C11.2917 21.4806 11.2085 22.0726 11.25 22.6625V27.5M11.25 23.75C5 25.625 5 20.625 2.5 20L11.25 23.75Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/glerme/"
                >
                  <img src="/linkedin.svg" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=5514998363749"
                >
                  <img src="/whatsapp.svg" alt="" />
                </a>
              </footer>
            </Contato>
          </TextContainer>
        </Content>
      </PageContainer>
    </Container>
  );
};
