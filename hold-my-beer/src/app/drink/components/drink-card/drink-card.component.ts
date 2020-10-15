import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../../../order/services/order.service';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent implements OnInit {

  @Input() drinkId: number;
  @Input() name: string;
  @Input() isAlcoholic: boolean;
  @Input() description: string;
  quantity = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  addADrink(): void {
    this.orderService.addADrink(this.drinkId, this.quantity);
  }
}
