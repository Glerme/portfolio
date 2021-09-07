import Link from 'next/link';

import { Container } from './styles';

interface MenuItemProps {
  label: string;
  url: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, url }) => {
  return (
    <>
      <Container>
        <Link href={url} passHref>
          <a title={label}>{label}</a>
        </Link>
      </Container>
    </>
  );
};
