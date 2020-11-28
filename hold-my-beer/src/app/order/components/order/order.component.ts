import { Component, OnInit } from '@angular/core';
import {DrinkService} from '../../../drink/services/drink.service';
import {Drink} from '../../../drink/models/drink';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  drinks: Drink[] = new Array<Drink>();

  constructor(private drinkService: DrinkService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.drinks = this.drinkService.getDrinksFromLocal();
  }

  drinkNameById(drinkId: number): string {
    return this.drinks.find((drink) => drink.uid === drinkId.toString()).name;
  }

  deleteOrder(): void {
    this.orderService.deleteOrder();
  }

  sendOrder(): void {
    this.orderService.sendOrder();
  }
}
