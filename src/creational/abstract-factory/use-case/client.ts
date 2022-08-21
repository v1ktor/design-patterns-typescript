import { FurnitureFactory } from "./furniture-factory";

const TABLE = FurnitureFactory.getFurniture('BigTable');
console.log(TABLE);

const CHAIR = FurnitureFactory.getFurniture('SmallChair');
console.log(CHAIR);
