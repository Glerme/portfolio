import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  label: string;
  onButtonClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onButtonClick }) => {
  return <Container onClick={onButtonClick}>{label}</Container>;
};
