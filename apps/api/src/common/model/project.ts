import { UUID } from "crypto";

export class Project {
  public id: UUID;
  public name: string;
  public createdAt: Date;
  public updatedAt: Date;
}