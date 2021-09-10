import Slider from 'react-slick';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Container } from './styles';

export const Carrosel: React.FC = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
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
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};
