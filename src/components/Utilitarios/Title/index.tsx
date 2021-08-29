import React from 'react';

import { Container } from './styles';

interface TitleProps {
  label: string;
}

export const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <Container>
      <p>{label}</p>
      <h1>{label}</h1>
    </Container>
  );
};
