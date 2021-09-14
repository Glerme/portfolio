import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CustomArrowProps } from 'react-slick';

export const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <BsChevronRight size={20} color={'var(--green)'} {...props} />
);

export const PrevArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <BsChevronLeft size={20} color={'var(--green)'} {...props} />
);
