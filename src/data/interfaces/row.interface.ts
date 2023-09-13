import { RowType } from "../enums/RowType.enum";

export default interface IRow {
  name: string;
  type: RowType;
  isNullable: boolean;
}
