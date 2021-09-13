import { FiGithub, FiMail } from 'react-icons/fi';
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

import emailjs from 'emailjs-com';

import { Input } from '../../Forms/Input';
import { Button } from '../../Forms/Button';
import { TextArea } from '../../Forms/TextArea';
import { PageContainer } from '../../Layout/PageContainer';
import { CardRedesSociais } from '../../Cards/CardRedesSociais';

import { Container, Linhas, RedesSociais } from './styles';
import { useState } from 'react';

export const Contato: React.FC = () => {
  const [dataForm, setDataForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  emailjs.init('user_rRBKZNkEM0Zsj6VOwpySx');

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(dataForm);

    const parsedData = {
      from_name: dataForm.nome,
      email: dataForm.email,
      message: dataForm.mensagem,
    };

    emailjs
      .send(
        'service_4fxl7os',
        'template_u7zx6md',
        parsedData,
        'user_rRBKZNkEM0Zsj6VOwpySx',
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
  };

  const formChanged = e => {
    dataForm[e.target.name] = e.target.value;

    setDataForm(dataForm);
  };

  return (
    <PageContainer id="contato" title="Contato">
      <Container>
        <main>
          <form onSubmit={e => handleSubmit(e)}>
            <h2>Entre em Contato!</h2>

            <Input label="Nome" name="nome" onChange={formChanged} />
            <Input
              label="Email"
              name="email"
              type="email"
              onChange={formChanged}
            />
            <TextArea label="Mensagem" name="mensagem" onChange={formChanged} />

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
