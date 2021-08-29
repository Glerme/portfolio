import React from 'react';

import { Container } from './styles';

interface Items {
  label: string;
  url: string;
}

interface MenuItemProps {
  menuItems: Items[];
}

export const MenuItem: React.FC<MenuItemProps> = ({ menuItems }) => {
  return (
    <Container>
      {menuItems.map((item, index) => (
        <a key={index} href={item.url}>
          <li>{item.label}</li>
        </a>
      ))}
    </Container>
  );
};
