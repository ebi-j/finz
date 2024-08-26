import { Button } from '@headlessui/react';
import { ButtonProps } from './models';
import React from 'react';
import { IconProps } from '../icon/models';
import { getColorVariant, getHoverVariant } from '../../shared/utils';

interface IconButtonProps extends ButtonProps {
	children: React.ReactElement<IconProps & SVGAElement>;
}

const IconButton = ({ children, variant = 'default', size = 'm', ...others }: IconButtonProps) => (
	<Button className={`${getColorVariant(variant)} ${getHoverVariant(variant)}`} {...others}>
		{React.cloneElement(children, { size })}
	</Button>
);

export { IconButton };
