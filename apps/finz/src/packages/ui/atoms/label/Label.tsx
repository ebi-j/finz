import { Label as BaseLabel, LabelProps as BaseLabelProps } from '@headlessui/react';

interface LabelProps extends Omit<BaseLabelProps, 'children'> {
	children: string;
}

const Label = ({ children, ...other }: LabelProps) => (
	<BaseLabel className={`font-sans text-sm font-normal leading-5`} {...other}>
		{children}
	</BaseLabel>
);

export { Label };
export type { LabelProps };
