import { useForm } from 'react-hook-form';
import { Input } from '../../../packages/ui/molecules/input/Input';
import { Button } from '../../../packages/ui/atoms/button/Button';
import { Dialog } from '../../../packages/ui/organisms/dialog/Dialog';
import { useContext } from 'react';
import { DialogContext } from '../../../packages/ui/organisms/dialog/context';
import { post } from '../../../packages/shared/httpUtil';

interface FormData {
	name: string;
}

interface UseCreateProjectDialogProps {
	onCreated: () => void;
}

export const useCreateProjectDialog = ({ onCreated }: UseCreateProjectDialogProps) => {
	const dialogName = 'create-project';
	const { open, close, isOpen } = useContext(DialogContext);

	const openCreateProjectDialog = () => {
		open(dialogName);
	};

	const closeCreateProjectDialog = () => {
		close(dialogName);
	};

	const isCreateProjectDialogOpen = isOpen(dialogName);

	const CreateProjectDialog = () => {
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm<FormData>();
		const { close } = useContext(DialogContext);

		const onSubmit = async (data: FormData): Promise<void> => {
			try {
				const result = await post<{ name: string }>('/projects', { name: data.name });
				console.debug('Project created:', result);
				close(dialogName);
				onCreated();
			} catch (error) {
				console.error('Error creating project:', error);
			}
		};

		const handleClose = () => {
			close(dialogName);
		};

		return (
			<Dialog size={'l'} name={dialogName} title="Create Project">
				<form onSubmit={handleSubmit(onSubmit)} className="form-layout">
					<Input
						label="Project Name"
						placeholder="Enter project name"
						{...register('name', { required: 'Project name is required' })}
						error={errors.name?.message}
					/>
					<div className="flex gap-4 justify-end">
						<Button type="button" onClick={handleClose}>
							Cancel
						</Button>
						<Button variant="primary" type="submit">
							Create
						</Button>
					</div>
				</form>
			</Dialog>
		);
	};

	return { CreateProjectDialog, openCreateProjectDialog, closeCreateProjectDialog, isCreateProjectDialogOpen };
};
