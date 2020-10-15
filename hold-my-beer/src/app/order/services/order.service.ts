import { Injectable } from '@angular/core';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = new Array<Order>();

  constructor() { }

  addNewOrder(drinkId: number, quantity: number, date: Date): void {
    this.orders.push(
      new Order(
        drinkId,
        quantity,
        date
      )
    );
  }
}
