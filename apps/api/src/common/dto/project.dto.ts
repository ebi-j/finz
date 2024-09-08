import { UUID } from 'crypto';

export class ProjectDto {
	public id: UUID;
	public name: string;
	public createdAt: Date;
	public updatedAt: Date;
}
