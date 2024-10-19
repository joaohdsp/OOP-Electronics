import { Electronics } from "./Electronics";

export class Radio extends Electronics {
  weight?: number;

  setFees(fees: number) {
    if (fees > 50) {
      throw new Error(
        "A porcentagem de juros não pode ser maior que 50 no rádio"
      );
    }
    this.fees = fees;
  }

  getFees() {
    return this.fees;
  }
}
