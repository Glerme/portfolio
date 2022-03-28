import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiGithub, FiMail } from 'react-icons/fi';
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

import { PageContainer } from 'layouts/PageContainer';

import { Input } from 'components/Forms/Input';
import { Button } from 'components/Forms/Button';
import { TextArea } from 'components/Forms/TextArea';
import { CardRedesSociais } from 'components/Cards/CardRedesSociais';

import { Container, Linhas, RedesSociais } from './styles';

export const Contato: React.FC = () => {
  const [fields, setFields] = useState({
    nome: '',
    email: '',
    message: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (fields.nome === '' || fields.email === '' || fields.message === '') {
        toast.warn('Por Favor, preencha todos os campos.', {
          theme: 'dark',
        });
        return;
      }

      const parsedData = {
        from_name: fields.nome,
        email: fields.email,
        message: fields.message,
      };

      setFields({
        email: '',
        message: '',
        nome: '',
      });
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar!', {
        position: 'top-right',
        theme: 'dark',
      });
    }
  };

  return (
    <PageContainer id="contato" title="Contato">
      <Container>
        <main>
          <form onSubmit={handleSubmit}>
            <h2>Entre em Contato!</h2>

            <Input
              label="Nome"
              name="nome"
              onChange={e =>
                setFields(fields => ({
                  ...fields,
                  nome: e.target.value,
                }))
              }
              value={fields.nome}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              onChange={e =>
                setFields(fields => ({
                  ...fields,
                  email: e.target.value,
                }))
              }
              value={fields.email}
            />
            <TextArea
              label="Mensagem"
              name="mensagem"
              onChange={e =>
                setFields(fields => ({
                  ...fields,
                  message: e.target.value,
                }))
              }
              value={fields.message}
            />

            <Button label="Enviar" type="submit" />
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
