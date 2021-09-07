import { MenuItem } from '../MenuItem';

import { MenuListContainer, NavBarContainer } from './styles';

interface ItemProps {
  label: string;
  url: string;
}

interface MenuListProps {
  items: ItemProps[];
}

export const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <NavBarContainer>
      <MenuListContainer>
        {items.map(item => (
          <MenuItem label={item.label} url={item.url} key={item.label} />
        ))}
      </MenuListContainer>
    </NavBarContainer>
  );
};
