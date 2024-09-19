import { ListViewModel, ProjectListItem } from '@finz/lib';
import { useEffect, useState } from 'react';
import { get } from '../../packages/shared/httpUtil';

const useProjects = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [projects, setProjects] = useState<ListViewModel<ProjectListItem>>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const result = await get<ListViewModel<ProjectListItem>>('/projects');
				setProjects(result);
			} catch (error) {
				console.error('Error loading projects:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { isLoading, projects };
};

export { useProjects };
