import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  label: string;
  onButtonClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onButtonClick }) => {
  return <Container onClick={onButtonClick}>{label}</Container>;
};

export default Button;
