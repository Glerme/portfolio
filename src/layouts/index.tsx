import { PageHeader } from './PageHeader';
import { PageMain } from './PageMain';

import { Container } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <PageHeader />
      <PageMain>{children}</PageMain>
    </Container>
  );
};
