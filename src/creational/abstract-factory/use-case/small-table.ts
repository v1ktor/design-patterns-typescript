import { Table } from "./table";

export class SmallTable extends Table {
  constructor() {
    super();
    this.name = 'Small Table';
    this.height = 40;
    this.width = 40;
    this.depth = 40;
  }
}
