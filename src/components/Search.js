import React, { useEffect, useRef } from 'react';

export function SearchHeader({ invisible, form, handleChange }) {
  // console.log('SearchHeader_invisible: ',invisible);
  const inputRef = useRef();
  // console.log('inputRef.current: ', inputRef.current);

  useEffect(() => {
    if (!invisible) inputRef.current?.focus();
  }, [invisible]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const baseClassName = 'header-controls-search-form form-inline';
  return (
    <form
      // data-id="search-form"
      className={invisible ? baseClassName + ' invisible' : baseClassName}
      onSubmit={handleSubmit}
    >
      <input
        name="search"
        className="form-control"
        placeholder="Поиск"
        value={form.search}
        onChange={handleChange}
        ref={inputRef}
      ></input>
    </form>
  );
}

export function SearchCatalog({handleSubmit}) {
  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
      <input className="form-control" placeholder="Поиск"></input>
    </form>
  );
}
