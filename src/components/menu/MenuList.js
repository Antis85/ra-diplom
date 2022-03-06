import React from 'react';

export function MenuList(props) {
  return <ul className={props.className}>{props.children(props.items)}</ul>;
}
