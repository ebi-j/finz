import { FieldValues, useForm } from 'react-hook-form';
import { Input } from '../../../packages/ui/molecules/input/Input';
import { Button } from '../../../packages/ui/atoms/button/Button';
import { Dialog } from '../../../packages/ui/organisms/dialog/Dialog';
import { useContext } from 'react';
import { DialogContext } from '../../../packages/ui/organisms/dialog/context';

interface FormData extends FieldValues {
	projectName: string;
}

export const useCreateProjectDialog = () => {
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

		const onSubmit = (data: FormData): void => {
			console.debug(data);
			close(dialogName);
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
						{...register('projectName', { required: 'Project name is required' })}
						error={errors.projectName?.message}
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
