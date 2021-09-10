import Slider from 'react-slick';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Container } from './styles';
import { CardProjetosProps } from '../../../types/CardProjetoProps';

interface ComponentItem {
  component: React.FC;
  props: {
    data: CardProjetosProps;
  };
}

interface CarroselProps {
  components: ComponentItem[];
}

export const Carrosel: React.FC<CarroselProps> = ({ components }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    nextArrow: <BsChevronRight size={20} color={'var(--green)'} />,
    prevArrow: <BsChevronLeft size={20} color={'var(--green)'} />,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          arrows: true,
          dots: false,
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },

      {
        breakpoint: 1080,
        settings: {
          arrows: true,
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {components.map(({ component: Component, props }, index) => (
          <Component key={index} {...props} />
        ))}
      </Slider>
    </Container>
  );
};
