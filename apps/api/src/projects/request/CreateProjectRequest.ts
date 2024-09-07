import { IsNotEmpty } from "class-validator";

export class CreateProjectRequest {
  @IsNotEmpty()
  public name: string;
}