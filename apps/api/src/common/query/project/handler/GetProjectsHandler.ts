import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProjects } from '../GetProjects';
import { ProjectEntity } from '../../../entity';
import { Repository } from 'typeorm';
import { ProjectDto } from '../../../dto';
import { InjectRepository } from '@nestjs/typeorm';

@QueryHandler(GetProjects)
export class GetProjectsHandler implements IQueryHandler<GetProjects> {
	constructor(@InjectRepository(ProjectEntity) private readonly projectRepository: Repository<ProjectEntity>) {}

	public async execute(query: GetProjects): Promise<ProjectDto[]> {
		const projects = await this.projectRepository.find({
			skip: query.filter.page * query.filter.limit,
			take: query.filter.limit,
		});
		return projects.map((p) => p.toDto());
	}
}
