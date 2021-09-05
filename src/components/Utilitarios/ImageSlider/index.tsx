import { useState } from 'react';

import { Container, Pager } from './styles';

interface Props {
  title: string;
  url: string;
}

interface ComponentItem {
  component: React.FC;
  props: {
    data: Props[];
  };
}

interface ImageSliderProps {
  components: ComponentItem[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(components) || components.length <= 0) {
    return null;
  }

  const intervalo = setTimeout(() => {
    if (currentIndex === components.length - 1) {
      setCurrentIndex(0);
      return;
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, 10000);

  console.log('components', components);

  return (
    <Container>
      <div>
        {components.map(
          ({ component: Component, props }, index) =>
            index === currentIndex && <Component key={index} {...props} />,
        )}
      </div>

      <Pager>
        {components.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              clearInterval(intervalo);
              setCurrentIndex(index);
            }}
          >
            button
          </button>
        ))}
      </Pager>
    </Container>
  );
};
