export class CapacityCalculation {
    calculate(demand: number, capacity: number): number {
        if (capacity <= 0 || demand < 0) {
            throw('Capacity must be positive')
        }

        const result = (demand / capacity)
        return result

    }
}