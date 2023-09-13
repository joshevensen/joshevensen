import IMockup from "../interfaces/mockup.interface";
import ITable from "../interfaces/table.interface";

export class softwareIdea {
  constructor(
    public publish: boolean,
    public slug: string,
    public title: string,
    public possibleNames: string[],
    public problem: string,
    public tables: ITable[],
    public mockups: IMockup[],
    public infastructure: string | null
  ) {}
}
