import { Electronics } from "./src/Electronics";

export class Radio extends Electronics {
  private weight: number = 0;

  constructor(brand: string) {
    super(brand);
  }

  setFees(fees: number) {
    if (fees > 50) {
      throw new Error("A porcentagem de juros não pode ser maior que 50%");
    }

    this.fees = fees;
  }

  getFees() {
    return this.fees;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }
}
