import { Injectable } from '@nestjs/common';
import { BaseFilter } from '../common/dto/BaseFilter';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProjectRequest } from './request/CreateProjectRequest';
import { CreateProject } from '../common/command/project/CreateProject';
import { ProjectCreatedResponse } from './response/ProjectCreatedResponse';
import { ProjectDto } from '../common/dto';
import { GetProjects } from '../common/query/project/GetProjects';
import { ProjectResponse } from './response/ProjectResponse';

@Injectable()
export class ProjectsService {
	constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

	public async findProjects(filter: BaseFilter): Promise<ProjectResponse[]> {
		const command = new GetProjects(filter);
		const projectDtos = await this.queryBus.execute<GetProjects, ProjectDto[]>(command);
		return projectDtos.map(
			(p) =>
				({
					id: p.id,
					name: p.name,
				} as ProjectResponse),
		);
	}

	public async createProject(request: CreateProjectRequest): Promise<ProjectCreatedResponse> {
		const command = new CreateProject(request.name);
		const projectDto = await this.commandBus.execute<CreateProject, ProjectDto>(command);
		return {
			id: projectDto.id,
			name: projectDto.name,
			createdAt: projectDto.createdAt,
			updatedAt: projectDto.updatedAt,
		} as ProjectCreatedResponse;
	}
}
