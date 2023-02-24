import { FileAirplaneRepository } from "../repository/airplane/file-airplane-repository";
import { LoadAirplaneByManufacturerUsecase } from "../usecase/load-airplane-by-manufacturer-usecse";
import { LoadAirplaneByNameUsecase } from "../usecase/load-airplane-by-name-usecase";
import { LoadAllAirplanesUsecase } from "../usecase/load-all-ariplanes-usecase";
import { LoadUsecase } from "../usecase/load-usecase-interface";

export class MakeLoadAirplanesUsecase {
    //constructor(private readonly connection: any) { }

    static buildAllAirplanes(connection: any): LoadUsecase {
        const repository = new FileAirplaneRepository(connection)
        return new LoadAllAirplanesUsecase(repository)
    }

    static buildByManufacturer(connection: any): LoadUsecase {
        const repository = new FileAirplaneRepository(connection)
        return new LoadAirplaneByManufacturerUsecase(repository)
    }

    static buildByName(connection: any): LoadUsecase {
        const repository = new FileAirplaneRepository(connection)
        return new LoadAirplaneByNameUsecase(repository)
    }
}