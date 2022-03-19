import React from 'react';
import SectionCardContent from '../../SectionCardContent';
import Loader from '../../Loader';

const topSalesList = [
  //   {
  //     id,//число
  //     category,//число
  //     title,//текст
  //     price,//число
  //     images,//массив строк (urls)
  // },
];

export default function TopsalesContent() {
  //topSalesList получаем после загрузки с сервера
  const topSalesCards = topSalesList.map((cardProps) => (
    <SectionCardContent key={cardProps.id} props={cardProps} />
  ));
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">{topSalesCards.length ? topSalesCards : <Loader />}</div>
    </section>
  );
}
