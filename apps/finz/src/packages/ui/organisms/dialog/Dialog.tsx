import { Dialog as BaseDialog, DialogPanel } from '@headlessui/react';
import { BodyRegular, PageSubTitle } from '../../atoms/typography/Typography';
import { Size, Variant } from '../../shared/models';
import styles from './Dialog.module.css';

interface DialogProps {
	isOpen: boolean;
	onClose: () => void;
	onAction: () => void;
	title?: string;
	description?: string;
	children?: React.ReactNode;
	size?: Size;
	variant?: Variant;
}

const Dialog = ({
	isOpen,
	title,
	description,
	onClose,
	onAction,
	children,
	size = 'm',
	variant = 'default',
}: DialogProps) => {
	return (
		<BaseDialog open={isOpen} onClose={onClose} className="relative z-50">
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-gray-700 bg-opacity-25">
				<DialogPanel className={`max-w-lg space-y-4 bg-white p-8 rounded-2xl ${styles[size]}`}>
					{title && <PageSubTitle variant={variant}>{title}</PageSubTitle>}
					{description && <BodyRegular>{description}</BodyRegular>}
					{children}
					<div className="flex gap-4">
						<button onClick={onClose}>Cancel</button>
						<button onClick={onAction}>Deactivate</button>
					</div>
				</DialogPanel>
			</div>
		</BaseDialog>
	);
};

export { Dialog };
