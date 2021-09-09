import Slider from 'react-slick';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Container } from './styles';

interface ComponentItem {
  component: React.FC;
  props: {
    title: string;
    image: string;
    url?: string;
  };
}

interface CarroseProps {
  components: ComponentItem[];
}

export const Carrosel: React.FC<CarroseProps> = ({ components }) => {
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
        breakpoint: 425, // devices 768 and below
        settings: {
          arrows: true,
          dots: false,
          rows: 1,
          slidesToShow: 1, // for mobile show 1 slide
          slidesToScroll: 1, // and scroll 1 slide when arrow clicked
          autoplay: true,
        },
      },

      {
        breakpoint: 768, // devices 768 and below
        settings: {
          dots: true,
          arrows: true,
          rows: 1,
          slidesToShow: 2, // for mobile show 1 slide
          slidesToScroll: 2, // and scroll 1 slide when arrow clicked
          autoplay: true,
        },
      },

      {
        breakpoint: 1080, // devices 768 and below
        settings: {
          arrows: true,
          rows: 2,
          slidesToShow: 3, // for mobile show 1 slide
          slidesToScroll: 1, // and scroll 1 slide when arrow clicked
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
