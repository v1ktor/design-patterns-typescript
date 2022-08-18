import { ChairFactory } from "./chair-factory";
import { ChairType } from "./chair";

const CHAIR = ChairFactory.getChair(ChairType.MEDIUM);
console.log(CHAIR.getDimensions());