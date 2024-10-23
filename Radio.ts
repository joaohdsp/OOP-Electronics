import { Electronics } from "./Electronics";

export class Radio extends Electronics {
  weight?: number;

  constructor(brand: string, voltage: number, weight: number, fees?: number) {
    super(brand, voltage, fees); // Chama o construtor da classe Electronics
    if (fees !== undefined && fees > 50) {
      alert("A porcentagem de juros deve ser menor que 50 para radio");
    }
    this.weight = weight; // Define a propriedade weight
  }
}
