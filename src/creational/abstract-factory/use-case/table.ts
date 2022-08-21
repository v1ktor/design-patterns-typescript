import { dimension } from "./dimension";

export interface ITable {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimension(): dimension;
}

export abstract class Table implements ITable {
  name = ''
  height = 0
  width = 0
  depth = 0

  getDimension(): dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth
    }
  }
}
