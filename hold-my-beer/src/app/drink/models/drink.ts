export class Drink {
  uid: string;
  name: string;
  isAlcoholic: boolean;


  constructor(uid: string, name: string, isAlcoholic: boolean) {
    this.uid = uid;
    this.name = name;
    this.isAlcoholic = isAlcoholic;
  }
}
