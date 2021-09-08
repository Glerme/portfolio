import Slider from 'react-slick';

import { Container } from './styles';

import { CardLinguagens } from '../../Cards/CardLinguagens';

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
  return (
    <Container>
      <Slider
        rows={2}
        dots
        arrows={false}
        infinite
        autoplay={true}
        autoplaySpeed={3000}
        pauseOnHover={true}
        speed={1000}
        slidesToShow={3}
        slidesToScroll={1}
      >
        {components.map(({ component: Component, props }, index) => (
          <Component key={index} {...props} />
        ))}
      </Slider>
    </Container>
  );
};
