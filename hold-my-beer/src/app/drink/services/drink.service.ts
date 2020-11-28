import {Injectable, OnInit} from '@angular/core';
import {Drink} from '../models/drink';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  drinks: Drink[] = [
    new Drink('1',
      'Bold Stout',
      'Stout is a dark, top-fermented beer with a number of variations, including dry stout, oatmeal stout, milk stout, ' +
      'and imperial stout.',
      true),
    new Drink('2',
      'Ricktey Pale Ale',
      'Pale ale is a kind of ale, atop-fermented beer made with predominantly pale malt.',
      true),
    new Drink('3',
      'Lucky India Pale Ale',
      'India pale ale (IPA) is a hoppy beer style within the broader category of pale ale',
      true),
    new Drink('4',
      'Sad Beer',
      'Alcohol-free beer',
      false),
    new Drink('5',
      'Water',
      'Yeah, nah!',
      false)
  ];

  constructor() { }

  // STUB to delete
  getDrinksFromLocal(): Drink[] {
    return this.drinks;
  }
}
