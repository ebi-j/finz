import { Column, Entity } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { BaseEntity } from './base.entity';

@Entity('tables')
export class TableEntity extends BaseEntity {
	@Column({
		type: 'varchar',
		nullable: false,
	})
	public name: string;

	public project: ProjectEntity;
}
