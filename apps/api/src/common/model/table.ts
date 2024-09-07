import { UUID } from "crypto";

export class Table {
  public id: UUID;
  public projectId: UUID;
  public name: string;
  public createdAt: Date;
  public updatedAt: Date;
}