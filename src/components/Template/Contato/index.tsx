import { FiGithub, FiMail } from 'react-icons/fi';
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

import { Input } from '../../Forms/Input';
import { Button } from '../../Forms/Button';
import { TextArea } from '../../Forms/TextArea';
import { PageContainer } from '../../Layout/PageContainer';
import { CardRedesSociais } from '../../Cards/CardRedesSociais';

import { Container, Linhas, RedesSociais } from './styles';

export const Contato: React.FC = () => {
  return (
    <PageContainer id="contato" title="Contato">
      <Container>
        <main>
          <form>
            <h2>Entre em Contato!</h2>

            <Input label="Nome" name="name" />
            <Input label="Email" name="email" type="email" />
            <TextArea label="Mensagem" name="name" />

            <Button
              label="Enviar"
              onButtonClick={() => console.log()}
              type="submit"
            />
          </form>

          <RedesSociais>
            <h2>Minhas Redes Sociais!</h2>
            <section>
              <CardRedesSociais
                card={[
                  {
                    icon: FiGithub,
                    title: 'Github',
                    url: 'https://github.com/Glerme',
                  },
                  {
                    icon: FaLinkedinIn,
                    title: 'Linkedin',
                    url: 'https://www.linkedin.com/in/glerme/',
                  },
                  {
                    icon: FaWhatsapp,
                    title: 'WhatsApp',
                    url: 'https://api.whatsapp.com/send?phone=5514998363749',
                  },
                  {
                    icon: FaFacebook,
                    title: 'Facebook',
                    url: 'https://www.facebook.com/guilherme.felipe.965/',
                  },
                  {
                    icon: FaInstagram,
                    title: 'Instagram',
                    url: 'https://www.instagram.com/gui_felipeh/',
                  },
                  {
                    icon: FiMail,
                    title: 'Email',
                    url: "mailto:guiggff@gmail.com?subject='Contato'",
                  },
                ]}
              />
            </section>
          </RedesSociais>
        </main>
        <Linhas />
      </Container>
    </PageContainer>
  );
};
