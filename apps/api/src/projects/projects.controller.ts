import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { BaseFilter } from '../common/dto/BaseFilter';
import { UUID } from 'crypto';
import { CreateProjectRequest } from './request/CreateProjectRequest';
import { PatchProjectRequest } from './request/PatchProjectRequest';
import { ProjectsService } from './projects.service';
import { ApiParam, ApiQuery, ApiTags, ApiOperation, ApiOkResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiInternalServerErrorResponse, ApiBody } from '@nestjs/swagger';

@Controller('projects')
@ApiTags('Projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @Get()
  @ApiOperation({
    summary: 'Get all projects',
    description: 'Get all projects with pagination',
  })
  @ApiQuery({ name: 'page', type: Number, description: 'Page number', required: false })
  @ApiQuery({ name: 'limit', type: Number, description: 'Number of items per page', required: false })
  @ApiOkResponse({ description: 'Projects fetched successfully' })
  @ApiBadRequestResponse({ description: 'Invalid filter' })
  @ApiNotFoundResponse({ description: 'Projects not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  public getProjects(@Query() { page, limit }: BaseFilter) {
    console.debug(typeof page, typeof limit);
    return [];
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new project',
    description: 'Create a new project with the given name',
  })
  @ApiBody({ type: CreateProjectRequest })
  @ApiOkResponse({ description: 'Project created successfully' })
  @ApiBadRequestResponse({ description: 'Invalid request body' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  public createProject(@Body() createProjectRequest: CreateProjectRequest) {
    return createProjectRequest;
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  public getProjectById(@Param('id', ParseUUIDPipe) id: UUID) {
    console.debug(typeof id);
    return { id };
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String })
  public updateProject(@Param('id', ParseUUIDPipe) id: UUID, @Body() patchProjectRequest: PatchProjectRequest) {
    return { id, patchProjectRequest };
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  public deleteProject(@Param('id', ParseUUIDPipe) id: UUID) {
    return { id };
  }
}
