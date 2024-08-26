import { PageSubTitle } from '../packages/ui/atoms/typography/Typography';
import { SquareAdd } from '../packages/ui/atoms/icon/Icons';
import { IconButton } from '../packages/ui/atoms/button/IconButton';
import { useState } from 'react';
import { Dialog } from '../packages/ui/organisms/dialog/Dialog';

const MainContent = () => {
	const [isProjectDialogOpen, setIsProjectDialogOpen] = useState<boolean>(false);

	const createProject = () => {
		setIsProjectDialogOpen(false);
	};

	return (
		<div className="flex h-screen">
			{/* left panel */}
			<div className="w-[260px] p-4 flex items-start justify-between">
				<PageSubTitle variant="primary">Projects</PageSubTitle>
				<IconButton title="Create Project" variant="primary" size="l" onClick={() => setIsProjectDialogOpen(true)}>
					<SquareAdd />
				</IconButton>
			</div>

			{/* main area */}
			<div className="flex-1 bg-gray-100"></div>
			{/* dialog */}
			<Dialog
				isOpen={isProjectDialogOpen}
				size={'l'}
				title="Create Project"
				onAction={() => createProject()}
				onClose={() => setIsProjectDialogOpen(false)}
			></Dialog>
		</div>
	);
};

export { MainContent };
