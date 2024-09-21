import { useForm } from 'react-hook-form';
import { Input } from '../../../packages/ui/molecules/input/Input';
import { Button } from '../../../packages/ui/atoms/button/Button';
import { Dialog } from '../../../packages/ui/organisms/dialog/Dialog';
import { useContext } from 'react';
import { DialogContext } from '../../../packages/ui/organisms/dialog/context';
import { post, patch } from '../../../packages/shared/httpUtil';
import { UUID } from 'crypto';

interface FormData {
	name: string;
}

interface ProjectDialogProps {
	id?: UUID;
	name?: string;
	onSubmittedSuccessful: () => void;
}

export const useProjectDialog = () => {
	const dialogName = 'create-project';
	const { open, close, isOpen } = useContext(DialogContext);

	const openProjectDialog = () => {
		open(dialogName);
	};

	const closeProjectDialog = () => {
		close(dialogName);
	};

	const isProjectDialogOpen = isOpen(dialogName);

	const ProjectDialog = ({ id, name, onSubmittedSuccessful }: ProjectDialogProps) => {
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm<FormData>({
			defaultValues: {
				name: name,
			},
		});
		const { close } = useContext(DialogContext);

		const onSubmit = async (data: FormData): Promise<void> => {
			try {
				if (!id) {
					await post<{ name: string }>('/projects', { name: data.name });
				} else {
					await patch<{ name: string }>(`/projects/${id}`, { name: data.name });
				}

				close(dialogName);
				onSubmittedSuccessful();
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

	return { ProjectDialog, openProjectDialog, closeProjectDialog, isProjectDialogOpen };
};
