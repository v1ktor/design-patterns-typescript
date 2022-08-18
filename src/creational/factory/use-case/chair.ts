import { dimension } from "./dimension";

export interface IChair {
    height: number;
    width: number;
    depth: number;

    getDimensions(): dimension
}

export enum ChairType {
    SMALL,
    MEDIUM,
    BIG
}

export abstract class Chair implements IChair {
    height = 0;
    width = 0;
    depth = 0;

    getDimensions(): dimension {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth
        };
    }
}