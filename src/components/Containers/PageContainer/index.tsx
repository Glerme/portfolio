import React from 'react';

import { Container } from './styles';

export const PageContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};
