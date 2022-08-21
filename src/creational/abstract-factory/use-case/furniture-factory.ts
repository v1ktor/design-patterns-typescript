import { IChair } from "./chair";
import { ITable } from "./table";
import { ChairFactory } from "./chair-factory";
import { BigTable } from "./big-table";
import { TableFactory } from "./table-factory";

interface IFurniture extends IChair, ITable {}

export class FurnitureFactory {
    static getFurniture(furniture: string): IFurniture | undefined {
        try {
            if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
                return ChairFactory.getChair(furniture);
            }
            if (['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture) > -1) {
                return TableFactory.getTable(furniture);
            }
        } catch (e) {
            console.log(e);
        }
    }
}
