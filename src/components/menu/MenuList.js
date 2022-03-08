import React from 'react';

export default function MenuList(props) {
  return <ul className={props.className}>{props.children(props.items)}</ul>;
}
