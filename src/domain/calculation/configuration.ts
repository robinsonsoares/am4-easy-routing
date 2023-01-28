import { CalculationInterface } from "../interfaces/calculation-interface";

export class ConfigurationCalculation implements CalculationInterface<number> {
    private capacityTotal = 1

    constructor(capacityTotal: number) {
        this.capacityTotal = capacityTotal
    }
    calculate(value: number): number {
        if (!this.capacityTotal) {
            this.capacityTotal = 1
        }

        return Math.floor(value / this.capacityTotal)

    }
}