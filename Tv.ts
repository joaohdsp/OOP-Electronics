import { Electronics } from "./Electronics";

export class Tv extends Electronics {
  inches?: number;

  setInches(inches: number) {
    if (inches > 80) {
      throw new Error("As polegadas da tv não podem ser maior que 80");
    }
    this.inches = inches;
  }

  getInches() {
    return this.inches;
  }
}
