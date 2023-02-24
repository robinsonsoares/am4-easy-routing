import { AirplaneProps } from "../domain/airplane/airplane";
import { AirplaneRepository } from "../repository/airplane/repository-interface";
import { LoadUsecase } from "./load-usecase-interface";

export class LoadAirplaneByManufacturerUsecase implements LoadUsecase {
    constructor(private readonly repository: AirplaneRepository) { }

    async execute(name: string): Promise<AirplaneProps[]> {
        return await this.repository.loadByManufacturer(name)
    }
}