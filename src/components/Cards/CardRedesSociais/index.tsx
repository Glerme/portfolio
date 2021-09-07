import { Container } from './styles';

import { FiGithub } from 'react-icons/fi';

import { IconBaseProps } from 'react-icons/lib';

interface CardProps {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
  url: string;
}

interface CardRedesSociaisProps {
  card: CardProps[];
}

export const CardRedesSociais: React.FC<CardRedesSociaisProps> = ({ card }) => {
  return (
    <>
      {card.map((c, index) => (
        <Container title={c.title} key={index}>
          <c.icon size={48} />
          <p>{c.title}</p>
        </Container>
      ))}
    </>
  );
};
