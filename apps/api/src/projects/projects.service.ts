import { Injectable } from '@nestjs/common';
import { BaseFilter } from '../common/dto/BaseFilter';
import { Project } from '../common/model/project';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProjectRequest } from './request/CreateProjectRequest';
import { CreateProject } from '../common/command/project/CreateProject';
import { ProjectCreatedResponse } from './response/ProjectCreatedResponse';
import { ProjectDto } from '../common/dto';

@Injectable()
export class ProjectsService {
	constructor(private readonly commandBus: CommandBus) {}

	public findProjects(filter: BaseFilter): Project[] {
		console.log(filter);
		return [];
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
