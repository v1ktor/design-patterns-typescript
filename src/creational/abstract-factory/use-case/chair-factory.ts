import { IChair } from "./chair";
import { BigChair } from "./big-chair";
import { SmallChair } from "./small-chair";
import { MediumChair } from "./medium-chair";

export class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == 'BigChair') return new BigChair();
        if (chair == 'MediumChair') return new MediumChair();
        if (chair == 'SmallChair') return new SmallChair();

        throw new Error('Chair not found');
    }
}