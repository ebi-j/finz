import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";
import { IBaseFilter } from "@finz/lib";

export class BaseFilter implements IBaseFilter {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  public page: number;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  public limit: number;
}