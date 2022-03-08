import React, {useEffect} from 'react';
/*
@url = http://localhost:7070
###
GET {{url}}/api/top-sales
###
GET {{url}}/api/categories
###
GET {{url}}/api/items
###
GET {{url}}/api/items?offset=58
###
GET {{url}}/api/items?q=Кеды
###
GET {{url}}/api/items?q=Черный&offset=6&categoryId=13
###
GET {{url}}/api/items/66
###
GET {{url}}/api/items/666
###
POST {{url}}/api/order Content-Type: application/json
{
  "owner": {
            "phone": "+7xxxxxxxxxx", "address": "Moscow City"
          }, 
          "items": [
            {
            "id": 66, "price": 34000, "count": 1
            },
            {
            "id": 65, "price": 7600, "count": 1
            }
          ]
}
*/
export default function MainPageContent() {
  useEffect(() => {});
  return (
    <>
      <div>MainPage</div>
    </>
  );
}
