import Slider from 'react-slick';

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
    arrows: false,
    rows: 2,
    responsive: [
      {
        breakpoint: 768, // devices 768 and below
        settings: {
          rows: 1,
          slidesToShow: 1, // for mobile show 1 slide
          slidesToScroll: 1, // and scroll 1 slide when arrow clicked
          autoplay: true,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider
        {...settings}

        // dots
        // autoplay={true}
        // autoplaySpeed={3000}
        // pauseOnHover={true}
        // speed={1000}
        // infinite
        // rows={2}
        // arrows={false}
        // initialSlide={0}
        // slidesToShow={3}
        // slidesToScroll={1}
      >
        {components.map(({ component: Component, props }, index) => (
          <Component key={index} {...props} />
        ))}
      </Slider>
    </Container>
  );
};
