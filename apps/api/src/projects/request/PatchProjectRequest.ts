import { PartialType } from "@nestjs/mapped-types";
import { CreateProjectRequest } from "./CreateProjectRequest";

export class PatchProjectRequest extends PartialType(CreateProjectRequest) { }