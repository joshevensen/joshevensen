import IRow from "./row.interface";

export default interface ITable {
  name: string;
  rows: IRow[];
}
