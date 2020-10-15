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
  @Input() index: number;

  quantity = 0;
  dangerTextId: string;
  dangerTextValue: string;
  quantityInputId: string;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.quantityInputId = 'quantity-' + this.index;
    this.dangerTextId = 'danger-text-zero-drink-' + this.index;
    this.dangerTextValue = 'Quantity must be over 0 !';
  }

  addADrink(): void {
    if (this.quantity === 0) {
      document.getElementById(this.dangerTextId).style.display = 'block';
    } else {
      document.getElementById(this.dangerTextId).style.display = 'none';
      this.orderService.addADrink(this.drinkId, this.quantity);
      document.getElementById(this.quantityInputId).value = 0;
    }
  }
}
