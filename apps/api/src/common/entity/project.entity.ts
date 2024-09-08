import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Project } from '../model/project';

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
		return new Project(this.name);
	}
}
