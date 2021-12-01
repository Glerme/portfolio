import { PageHeader } from './PageHeader';
import { PageLayout } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <PageLayout>
      <PageHeader />
      <div>{children}</div>
    </PageLayout>
  );
};
