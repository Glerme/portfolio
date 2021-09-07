import Link from 'next/link';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { Content, Container } from './styles';

interface CardProps {
  title: string;
  image: string;
  url: string;
  description: string;
}

interface ProjetosContainerProps {
  data: CardProps[];
}

export const ProjetosContainer: React.FC<ProjetosContainerProps> = ({
  data,
}) => {
  console.log();

  return (
    <Container>
      {data.map((d, index) => (
        <Content
          key={index}
          href={d.url}
          title={d.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={d.image} alt={d.title} />
          <div>
            <h1>{d.title}</h1>
            <p>{d.description}</p>
          </div>
        </Content>
      ))}
    </Container>
  );
};
