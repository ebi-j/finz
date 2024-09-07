import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { BaseFilter } from '../common/dto/BaseFilter';
import { UUID } from 'crypto';
import { CreateProjectRequest } from './request/CreateProjectRequest';
import { PatchProjectRequest } from './request/PatchProjectRequest';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @Get()
  public getProjects(@Query() { page, limit }: BaseFilter) {
    console.debug(typeof page, typeof limit);
    return [];
  }

  @Post()
  public createProject(@Body() createProjectRequest: CreateProjectRequest) {
    return createProjectRequest;
  }

  @Get(':id')
  public getProjectById(@Param('id', ParseUUIDPipe) id: UUID) {
    console.debug(typeof id);
    return { id };
  }

  @Patch(':id')
  public updateProject(@Param('id', ParseUUIDPipe) id: UUID, @Body() patchProjectRequest: PatchProjectRequest) {
    return { id, patchProjectRequest };
  }

  @Delete(':id')
  public deleteProject(@Param('id', ParseUUIDPipe) id: UUID) {
    return { id };
  }
}
