import { HTMLAttributes } from 'react';

import { Title } from '../../components/Utilitarios/Title';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <div {...rest}>
      {title && <Title label={title} />}
      <main style={{ padding: '1rem' }}>{children}</main>
    </div>
  );
};
