import { ICubeA } from "./cube-a";
import { CubeB } from "./cube-b";

export class CubeBAdapter implements ICubeA {
  private cube: CubeB;

  constructor() {
    this.cube = new CubeB();
  }

  manufacture(width: number, height: number, depth: number): boolean {
    return this.cube.create(
      [0 - width / 2, 0 - height / 2, 0 - depth / 2],
      [width / 2, height / 2, depth / 2],
    );
  }
}
