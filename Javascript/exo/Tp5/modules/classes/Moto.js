import { Vehicule } from "./Vehicule.js";

export class Moto extends Vehicule {
    constructor(brand, model, year, type) {
    super(brand, model, year);
    this.type = type;
    }

    display() {
    return `Moto: ${super.display()}, Type: ${this.type}`;
    }
}
