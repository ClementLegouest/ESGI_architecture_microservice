export class Order {
  uid: number;
  drinkId: number;
  quantity: number;
  date: Date;

  constructor(drinkId: number, quantity: number, date: Date) {
    this.drinkId = drinkId;
    this.quantity = quantity;
    this.date = date;
  }
}
