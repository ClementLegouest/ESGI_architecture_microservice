import { Injectable } from '@angular/core';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = new Array<Order>();

  constructor() { }

  addADrink(drinkId: number, quantity: number): void {
    if (quantity > 0) {
      this.orders.push(new Order(drinkId, quantity, new Date()));
    }
    console.log(this.orders);
  }
}
