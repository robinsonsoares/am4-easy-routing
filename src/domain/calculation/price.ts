export class PriceCalculation {
    calculate(gameMode: string, distance: number, type: string): number {
        if (distance <= 0) {
            throw ('Distance must be positive')
        }

        if (gameMode == 'easy' && type == 'economic') {
            return ((0.4006 * distance) + 170)
        }

        if (gameMode == 'easy' && type == 'business') {
            return ((0.8006 * distance) + 560)
        }

        if (gameMode == 'easy' && type == 'first') {
            return ((1.2006 * distance) + 1200)
        }

        if (gameMode == 'realismo' && type == 'economic') {
            return ((0.3006 * distance) + 150)
        }

        if (gameMode == 'realismo' && type == 'business') {
            return ((0.6006 * distance) + 500)
        }

        if (gameMode == 'realismo' && type == 'first') {
            return ((0.9006 * distance) + 1000)
        }
    }
}