import { RowType } from "../enums/RowType.enum";
import IMockup from "../interfaces/mockup.interface";
import IRow from "../interfaces/row.interface";
import ITable from "../interfaces/table.interface";

export class softwareIdea {
  public publish: boolean;
  public slug: string;
  public possibleNames: string[];
  public tables: ITable[];
  public mockups: IMockup[];
  public infastructure: string | null;

  constructor(public title: string, public problem: string) {
    this.slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    this.publish = false;
    this.possibleNames = [];
    this.tables = [];
    this.mockups = [];
    this.infastructure = null;
  }

  publishIdea() {
    this.publish = true;
  }

  addName(name: string) {
    this.possibleNames.push(name);
  }

  addTable(name: string) {
    this.tables.push({
      name,
      rows: [],
    });
  }

  addDefaultRows(tableName: string) {
    const tableIndex = this.tables.findIndex(
      (table) => table.name === tableName
    );

    this.tables[tableIndex].rows.push({
      name: "id",
      type: RowType.BigInt,
      isNullable: false,
    });

    this.tables[tableIndex].rows.push({
      name: "created_at",
      type: RowType.Timestamp,
      isNullable: false,
    });

    this.tables[tableIndex].rows.push({
      name: "updated_at",
      type: RowType.Timestamp,
      isNullable: true,
    });
  }

  addRow(
    tableName: string,
    rowName: string,
    rowType: RowType,
    isNullable = false
  ) {
    const tableIndex = this.tables.findIndex(
      (table) => table.name === tableName
    );

    this.tables[tableIndex].rows.push({
      name: rowName,
      type: rowType,
      isNullable: isNullable,
    });
  }

  addMockup(mockup: IMockup) {
    this.mockups.push(mockup);
  }
}
