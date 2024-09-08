import { UUID } from 'crypto';
import { Table } from './table';
import { ProjectEntity } from '../entity/project.entity';
import { ProjectDto } from '../dto';

export class Project {
	public id: UUID;
	public name: string;
	public createdAt: Date;
	public updatedAt: Date;
	public tables: Table[];

	constructor(name: string) {
		this.name = name;
	}

	public toEntity(): ProjectEntity {
		return new ProjectEntity(this.name);
	}

	public toDto(): ProjectDto {
		return {
			id: this.id,
			name: this.name,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		};
	}
}
