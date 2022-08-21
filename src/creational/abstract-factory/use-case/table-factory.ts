import { ITable } from "./table";
import { BigTable } from "./big-table";
import { MediumTable } from "./medium-table";
import { SmallTable } from "./small-table";

export class TableFactory {
  static getTable(table: string): ITable {
    if (table === 'BigTable') return new BigTable();
    if (table === 'MediumTable') return new MediumTable();
    if (table === 'SmallTable') return new SmallTable();

    throw new Error('Table not found');
  }
}
