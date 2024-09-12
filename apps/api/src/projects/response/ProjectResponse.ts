import { UUID } from 'crypto';

/**
 * Response for project
 */
export interface ProjectResponse {
	/**
	 * Project id
	 */
	id: UUID;
	/**
	 * Project name
	 */
	name: string;
}
