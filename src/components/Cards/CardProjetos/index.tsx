import { LinkContainer } from './styles';

interface CardProps {
  uid: string;
  title: string;
  url: { link_type: string; url: string };
  image: {
    dimensions: { width: number; height: number };
    alt: string;
    copyright: string | null;
    url: string;
  };
  text: string;
}

interface ProjetosContainerProps {
  data: CardProps;
}

export const CardProjetos: React.FC<ProjetosContainerProps> = ({ data }) => {
  return (
    <LinkContainer title={data.title}>
      <a href={data.url.url} target="_blank" rel="noopener noreferrer">
        <img src={data.image.url} alt={data.image.alt} />
        <div>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
        </div>
      </a>
    </LinkContainer>
  );
};
