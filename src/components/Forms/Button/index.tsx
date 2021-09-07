import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onButtonClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onButtonClick,
  ...rest
}) => {
  return (
    <Container onClick={onButtonClick} {...rest}>
      {label}
    </Container>
  );
};
