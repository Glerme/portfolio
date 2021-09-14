import Slider from 'react-slick';

import { Container } from './styles';
import { NextArrow, PrevArrow } from './Arrows';

export const Carrosel: React.FC = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,

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
      <Slider nextArrow={<NextArrow />} prevArrow={<PrevArrow />} {...settings}>
        {children}
      </Slider>
    </Container>
  );
};
