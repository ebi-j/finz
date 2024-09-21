import { Button as BaseButton } from '@headlessui/react';
import { ButtonProps } from './models';
import styles from './Button.module.css';

const Button = ({ children, variant = 'default', size = 's', className, ...others }: ButtonProps) => (
	<BaseButton
		className={`${styles[`btn-${variant}`]} ${styles[size]} transition-all-300-ease-in-out ${className}`}
		{...others}
	>
		{children}
	</BaseButton>
);

export { Button };
