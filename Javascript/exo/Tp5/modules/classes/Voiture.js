import { Vehicule } from "./Vehicule.js";

export class Voiture extends Vehicule {
    constructor(brand, model, year, numberOfDoors) {
    super(brand, model, year);
    this.numberOfDoors = numberOfDoors;
    }

    display() {
    return `Auto: ${super.display()}, Doors: ${this.numberOfDoors}`;
    }
}
