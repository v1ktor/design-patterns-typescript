import { ChairType, IChair } from "./chair";
import { MediumChair } from "./medium-chair";
import { BigChair } from "./big-chair";
import { SmallChair } from "./small-chair";

export class ChairFactory {
    static getChair(chairType: ChairType): IChair {
        switch (chairType) {
            case ChairType.SMALL:
                return new SmallChair();
            case ChairType.MEDIUM:
                return new MediumChair();
            case ChairType.BIG:
                return new BigChair();
            default:
                throw new Error("Chair type is not supported");
        }
    }
}