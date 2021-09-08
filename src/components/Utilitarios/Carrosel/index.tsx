import { Container } from './styles';

import Slider from 'react-slick';
import { CardLinguagens } from '../../Cards/CardLinguagens';

import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';

export const Carrosel: React.FC = () => {
  const images = [
    { title: 'HTML', url: '/icons/html.svg' },
    { title: 'CSS', url: '/icons/css.svg' },
    { title: 'JavaScript', url: '/icons/js.svg' },
    { title: 'TypeScript', url: '/icons/typescript.svg' },
    { title: 'React JS', url: '/icons/react.svg' },
    { title: 'Styled Comp.', url: '/icons/styled.svg' },
    { title: 'Electron JS', url: '/icons/electron.svg' },
    { title: 'Next JS', url: '/icons/next.svg' },
    { title: 'SASS', url: '/icons/sass.svg' },
    { title: 'Docker', url: '/icons/docker.svg' },
    { title: 'Node JS', url: '/icons/node.svg' },
    { title: 'Python', url: '/icons/python.svg' },
    { title: 'GraphQL', url: '/icons/graphql.svg' },
    { title: 'Figma', url: '/icons/figma.svg' },
  ];

  return (
    <Container>
      <Slider
        rows={2}
        dots
        infinite
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        nextArrow={<BsChevronDoubleRight size={24} color={'var(--green)'} />}
        prevArrow={<BsChevronDoubleLeft size={24} color={'var(--green)'} />}
      >
        {images.map(imagem => (
          <CardLinguagens
            key={imagem.title}
            title={imagem.title}
            url={imagem.url}
          />
        ))}
      </Slider>
    </Container>
  );
};
