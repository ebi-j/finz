import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Project } from '../model/project';
import { ProjectDto } from '../dto';

@Entity('projects')
export class ProjectEntity extends BaseEntity {
	@Column({
		type: 'varchar',
		length: 255,
		nullable: false,
	})
	name: string;

	constructor(name: string) {
		super();
		this.name = name;
	}

	public toModel(): Project {
		//todo: need to map table when it's implemented
		return new Project(this.id, this.name, []);
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
