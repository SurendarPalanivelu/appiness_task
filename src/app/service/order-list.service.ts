import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor() { }

  /**
   * status list API
   * date: 06-10-2020
   */
  statusList() {
    return [
      {
         "id": 1,
         "txt": "Order received"
      },
      {
         "id": 2,
         "txt": "Preparing"
      },
      {
         "id": 3,
         "txt": "Ready to serve"
      }
   ];
  }

  /**
   * order list API
   * date: 06-10-2020
   */
  orderList() {
    return [
      {
         "id": 1,
         "customer": "Suren",
         "items_count": 1,
         "items": [
            {
               "name": "Mushroom Pizza",
               "count": 1,
               "amount": 500
            }
         ],
         "total": 500,
         "status_id": 1,
         "delivery_address": "14, Ram Nager, Erode"
      },
      {
         "id": 2,
         "customer": "Amith",
         "items_count": 2,
         "items": [
            {
               "name": "Mushroom Pizza",
               "count": 1,
               "amount": 500
            },
            {
               "name": "Chicken Pizza",
               "count": 1,
               "amount": 600
            }
         ],
         "total": 1100,
         "status_id": 2,
         "delivery_address": "123, Lakshmi Street, Salem"
      },
      {
         "id": 3,
         "customer": "Kavin",
         "items_count": 3,
         "items": [
            {
               "name": "Mushroom Pizza",
               "count": 1,
               "amount": 500
            },
            {
               "name": "Chicken Pizza",
               "count": 2,
               "amount": 1200
            }
         ],
         "total": 1700,
         "status_id": 3,
         "delivery_address": "53, T Nager, Chennai"
      }
   ];
  }
}
