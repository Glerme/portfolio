import Slider from 'react-slick';

import { Container } from './styles';
import { NextArrow, PrevArrow } from './Arrows';

export const Carrosel: React.FC = ({ children }) => {
  const responsive = {
    responsive: [
      {
        breakpoint: 425,
        settings: {
          arrows: true,
          dots: false,
          rows: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 1080,
        settings: {
          arrows: true,
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider
        autoplay={true}
        pauseOnHover={true}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        dots={true}
        infinite={true}
        speed={1000}
        slidesToShow={3}
        slidesToScroll={1}
        rows={3}
        {...responsive}
      >
        {children}
      </Slider>
    </Container>
  );
};
