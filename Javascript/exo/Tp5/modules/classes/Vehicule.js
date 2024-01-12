
export class Vehicule {
    constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    }

    display() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}
