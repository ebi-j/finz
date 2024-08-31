import { PageSubTitle } from '../packages/ui/atoms/typography/Typography';
import { SquareAdd } from '../packages/ui/atoms/icon/Icons';
import { IconButton } from '../packages/ui/atoms/button/IconButton';
import { useCreateProjectDialog } from './components/create-project-dialog';

const MainContent = () => {
	const { CreateProjectDialog, openCreateProjectDialog } = useCreateProjectDialog();

	return (
		<div className="flex h-screen">
			{/* left panel */}
			<div className="w-[260px] p-4 flex items-start justify-between">
				<PageSubTitle className="text-color-primary">Projects</PageSubTitle>
				<IconButton title="Create Project" variant="primary" size="l" onClick={openCreateProjectDialog}>
					<SquareAdd />
				</IconButton>
			</div>

			{/* main area */}
			<div className="flex-1 bg-gray-100"></div>

			{/* dialog */}
			<CreateProjectDialog />
		</div>
	);
};

export { MainContent };
