import {Injectable, OnInit} from '@angular/core';
import {Drink} from '../models/drink';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  drinks: Drink[] = [
    new Drink('1', 'lagger', true),
    new Drink('2', 'Limonade', false),
    new Drink('3', 'Stout', true),
    new Drink('4', 'Jus de tomate', false),
    new Drink('5', 'Calvados', true)
  ];

  constructor() { }

  // STUB to delete
  getDrinksFromLocal(): Drink[] {
    return this.drinks;
  }
}
