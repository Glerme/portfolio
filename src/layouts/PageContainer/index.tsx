import { HTMLAttributes } from 'react';

import { Title } from '../../components/Utilitarios/Title';

import { Container } from './styles';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {title && <Title label={title} />}
      <main>{children}</main>
    </Container>
  );
};
