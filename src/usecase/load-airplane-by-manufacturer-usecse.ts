import { AirplaneProps } from "../domain/airplane/airplane";
import { AirplaneRepository } from "../repository/airplane/repository-interface";

export class LoadAirplaneByManufacturerUsecase {
    constructor(private readonly repository: AirplaneRepository) { }

    async execute(manufactureName: string): Promise<AirplaneProps[]> {
        return await this.repository.loadByManufacturer(manufactureName)
    }
}