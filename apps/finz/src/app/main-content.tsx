import { PageSubTitle } from '../packages/ui/atoms/typography/Typography';
import { SquareAdd } from '../packages/ui/atoms/icon/Icons';
import { IconButton } from '../packages/ui/atoms/button/IconButton';
import { useProjectDialog } from './components/project-dialog';
import { useProjects } from './hooks/useProjects';
import { SideMenuItem } from '../packages/ui/molecules/side-menu-item/SideMenuItem';
import { UUID } from 'crypto';
import { useState } from 'react';
import { ProjectListItem } from '@finz/lib';
import { Skeleton } from '../packages/ui/atoms/skeleton/Skeleton';

const MainContent = () => {
	const { isLoading: isProjectsRequestLoading, setShouldReload: setShouldReloadProjects, projects } = useProjects();
	const [projectInEdit, setProjectInEdit] = useState<ProjectListItem>();
	const { ProjectDialog, openProjectDialog } = useProjectDialog();

	const renameProject = (id: UUID) => {
		setProjectInEdit(projects.items.find((i) => i.id === id));
		//setShouldReloadProjects(true);
		openProjectDialog();
	};

	const deleteProject = (id: UUID) => {
		console.debug(id);
		//setShouldReloadProjects(true);
	};

	return (
		<div className="flex h-screen">
			{/* left panel */}
			<div className="w-[260px] flex flex-col divide-y divide-solid gap-y-2">
				<div className="p-4 flex items-start justify-between">
					<PageSubTitle className="text-color-primary">Projects</PageSubTitle>
					<IconButton title="Create Project" variant="primary" size="l" onClick={openProjectDialog}>
						<SquareAdd />
					</IconButton>
				</div>
				<div className="flex flex-col p-4">
					{isProjectsRequestLoading ? (
						<Skeleton />
					) : (
						projects.items.map((project, index) => (
							<SideMenuItem
								key={index}
								id={project.id}
								name={project.name}
								actions={[
									{
										name: 'Rename',
										onClick: renameProject,
									},
									{
										name: 'Delete',
										onClick: deleteProject,
										variant: 'warn',
									},
								]}
							/>
						))
					)}
				</div>
			</div>

			{/* main area */}
			<div className="flex-1 bg-gray-100"></div>

			{/* dialog */}
			<ProjectDialog
				id={projectInEdit?.id}
				name={projectInEdit?.name}
				onSubmittedSuccessful={() => setShouldReloadProjects(true)}
			/>
		</div>
	);
};

export { MainContent };
