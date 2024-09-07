import { Injectable } from '@nestjs/common';
import { BaseFilter } from '../common/dto/BaseFilter';
import { Project } from '../common/model/project';

@Injectable()
export class ProjectsService {
  public findProjects(filter: BaseFilter): Project[] {
    return [];
  }
}
