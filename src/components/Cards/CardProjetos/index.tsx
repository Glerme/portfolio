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
  console.log(data);

  return (
    <>
      {/* <LinkContainer title={title} key={uid}>
        <a href={url.url} target="_blank" rel="noopener noreferrer">
          <img src={image.url} alt={image.alt} />
          <div>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </a>
      </LinkContainer> */}
    </>
  );
};
