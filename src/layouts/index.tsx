import { PageHeader } from './PageHeader';
import { PageLayout } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <PageLayout>
      <PageHeader />
      <div style={{ marginTop: '3rem' }}>{children}</div>
    </PageLayout>
  );
};
