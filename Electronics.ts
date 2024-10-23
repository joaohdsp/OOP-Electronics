export abstract class Electronics {
  brand?: string;
  voltage?: number;
  fees?: number;

  constructor(brand: string, voltage: number, fees?: number) {
    if (brand.length <= 0) {
      alert("A marca eh obrigatoria");
    } else if (brand.length <= 2) {
      alert("O nome deve conter no minimo 3 caracteres");
    }

    this.brand = brand;
    this.voltage = voltage;
    this.fees = fees;
  }
}
