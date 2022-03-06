import React from 'react';
import MenuList from '../../menu/MenuList';
import MenuListItem from '../../menu/MenuListItem';
import MenuItemLink from '../../menu/MenuItemLink';

const menuItemsCatalog = [
  {
    // route: '/contacts',
    name: 'Все',
  },
  {
    // route: '/contacts',
    name: 'Женская обувь',
  },
  {
    // route: '/contacts',
    name: 'Мужская обувь',
  },
  {
    // route: '/contacts',
    name: 'Обувь унисекс',
  },
  {
    // route: '/contacts',
    name: 'Детская обувь',
  },
];

export function CatalogMenu() {
  return (
    <MenuList
      className="catalog-categories nav justify-content-center"
      items={menuItemsCatalog}
    >
      {(items) =>
        items.map((item, index) => (
          <MenuListItem key={index} className="nav-item">
            <MenuItemLink
              className="nav-link"
              classNameActive="active"
              // route={item.route}
              name={item.name}
            />
          </MenuListItem>
        ))
      }
    </MenuList>
  );
}
