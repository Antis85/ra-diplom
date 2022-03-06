import React from 'react';
import { NavLink } from 'react-router-dom';

export function MenuItemLink(props) {
  return (
    <NavLink to={props.route} className={props.className}>
      {props.name}
    </NavLink>
  );
}
