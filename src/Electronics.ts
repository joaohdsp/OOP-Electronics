export abstract class Electronics {
  protected brand: string;
  private voltage?: number;
  protected fees?: number;

  constructor(brand: string) {
    if (brand.length <= 0) {
      alert("A marca eh obrigatoria");
      throw new Error("A marca eh obrigatoria");
    } else if (brand.length > 0 && brand.length < 3) {
      alert("A marca deve conter pelo menos 3 caracteres");
      throw new Error("A marca deve conter pelo menos 3 caracteres");
    }
    this.brand = brand;
  }

  getBrand(): string {
    return this.brand;
  }

  setVoltage(voltage: number): void {
    this.voltage = voltage;
  }

  getVoltage() {
    return this.voltage;
  }
}
