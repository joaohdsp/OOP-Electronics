import { Electronics } from "./Electronics";

export class Tv extends Electronics {
  inches?: number;

  constructor(brand: string, voltage: number, inches: number, fees?: number) {
    super(brand, voltage, fees);
    if (inches !== undefined && inches > 80) {
      alert("As polegadas devem ser menor que 80");
    }
    this.inches = inches;
  }
}
