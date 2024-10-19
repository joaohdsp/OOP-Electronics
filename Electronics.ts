export abstract class Electronics {
    brand?: string;
    voltage?: number;
    fees?: number;
  
    constructor(brand: string) {
      if (brand.length <= 0) {
        alert("A marca é obrigatória");
      } else if (brand.length > 0 && brand.length < 3) {
        alert("A marca deve conter pelo menos 3 caracteres");
      }
      this.brand = brand;
    }
  }
  