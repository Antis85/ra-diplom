import React from 'react';
// import Loader from '../../Loader';
import TopsalesContent from './TopsalesContent';
import CatalogContent from '../Catalog/CatalogContent';

export default function MainContent() {
  return (
    <>
      <TopsalesContent />
      <CatalogContent nosearch={true}/>
    </>
  );
}
