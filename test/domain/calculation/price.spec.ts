import { PriceCalculation } from "../../../src/domain/calculation/price"

describe('Price calculation', () => {
    it('should return the price when correct data is provided', () => {
        const gameMode = 'easy'
        const distance = 10
        const type = 'economic'

        const priceCalculation = new PriceCalculation()
        const result = priceCalculation.calculate(gameMode, distance, type)

        expect(result).toBe(174.006)
    })

    it('should return the price when correct data is provided', () => {
        const gameMode = 'easy'
        const distance = 10
        const type = 'business'

        const priceCalculation = new PriceCalculation()
        const result = priceCalculation.calculate(gameMode, distance, type)

        expect(result).toBe(568.006)
    })

    it('should return the price when correct data is provided', () => {
        const gameMode = 'easy'
        const distance = 10
        const type = 'first'

        const priceCalculation = new PriceCalculation()
        const result = priceCalculation.calculate(gameMode, distance, type)

        expect(result).toBe(1212.006)
    })
})
