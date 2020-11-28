export class Drink {
  uid: string;
  name: string;
  description: string;
  isAlcoholic: boolean;

  constructor(uid: string, name: string, description: string, isAlcoholic: boolean) {
    this.uid = uid;
    this.name = name;
    this.description = description;
    this.isAlcoholic = isAlcoholic;
  }
}
