import { Injectable } from '@angular/core';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = new Array<Order>();

  constructor() { }

  getOrders(): Order[] {
    return this.orders;
  }

  addADrink(drinkId: number, quantity: number): void {
    if (quantity > 0) {
      this.orders.push(new Order(drinkId, quantity, new Date()));
    }
    console.log(this.orders);
  }

  sendOrder(): void {
    console.log('Commande envoyée : ');
    console.log(this.orders);
  }
}
