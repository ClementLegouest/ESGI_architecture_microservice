import { Component, OnInit } from '@angular/core';
import {DrinkService} from '../../../drink/services/drink.service';
import {Drink} from '../../../drink/models/drink';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  drinks: Drink[] = new Array<Drink>();

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinks = this.drinkService.getDrinksFromLocal();
  }

}
