import { UUID } from "crypto";
import { Table } from "./table";

export class Project {
  public id: UUID;
  public name: string;
  public createdAt: Date;
  public updatedAt: Date;
  public tables: Table[];
}