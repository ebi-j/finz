import { Button } from '@headlessui/react';
import { ButtonProps } from './models';
import React from 'react';
import styles from './Button.module.css';
import { IconProps } from '../icon/models';

interface IconButtonProps extends ButtonProps {
	children: React.ReactElement<IconProps & SVGAElement>;
}

const IconButton = ({ children, variant = 'default', size = 'm', ...others }: IconButtonProps) => (
	<Button className={styles[`btn-icon-${variant}`]} {...others}>
		{React.cloneElement(children, { size })}
	</Button>
);

export { IconButton };
