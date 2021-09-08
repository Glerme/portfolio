import Link from 'next/link';
import { useRouter } from 'next/router';

import { LinkContainer } from './styles';

interface ProjetosContainerProps {
  title: string;
  image: string;
  url: string;
  description: string;
}

export const CardProjetos: React.FC<ProjetosContainerProps> = ({
  image,
  url,
  title,
  description,
}) => {
  return (
    <LinkContainer>
      <Link href={url}>
        <a title={title} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </LinkContainer>
  );
};
