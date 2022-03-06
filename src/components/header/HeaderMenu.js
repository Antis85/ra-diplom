import React from 'react';
import MenuList from '../menu/MenuList';
import MenuListItem from '../menu/MenuListItem';
import MenuItemLink from '../menu/MenuItemLink';

const menuItemsHeader = [
  {
    route: '/',
    name: 'Главная',
  },
  {
    route: '/catalog',
    name: 'Каталог',
  },
  {
    route: '/about',
    name: 'О магазине',
  },
  {
    route: '/contacts',
    name: 'Контакты',
  },
];

export function HeaderMenu() {
  return (
    <MenuList className="navbar-nav mr-auto" items={menuItemsHeader}>
      {(items) =>
        items.map((item, index) => (
          <MenuListItem key={index} className="nav-item">
            <MenuItemLink
              className="nav-link"
              route={item.route}
              name={item.name}
            />
          </MenuListItem>
        ))
      }
    </MenuList>
  );
}
