import { Electronics } from "./Electronics";

export class Television extends Electronics {
  private inches: number = 0;

  constructor(brand: string) {
    super(brand);
  }

  setFees(fees: number) {
    this.fees = fees;
  }

  getFees() {
    return this.fees;
  }

  setInches(inches: number) {
    if (inches > 80) {
      throw new Error("As polegadas nao podem ser maior que 80");
    }

    this.inches = inches;
  }

  getInches() {
    return this.inches;
  }
}
