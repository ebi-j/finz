import { Size, Variant } from '../../shared/models';
import { ButtonProps as BaseButtonProps } from '@headlessui/react';

interface ButtonProps extends BaseButtonProps {
	variant?: Variant;
	size?: Size;
}

export type { ButtonProps };
