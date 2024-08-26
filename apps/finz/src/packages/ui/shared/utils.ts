import { Variant } from './models';

export const getColorVariant = (variant: Variant): string => {
	switch (variant) {
		case 'primary':
			return 'text-teal-600';
		default:
			return 'text-gray-700';
	}
};

export const getHoverVariant = (variant: Variant): string => {
	switch (variant) {
		case 'primary':
			return 'data-[hover]:text-teal-700';
		default:
			return 'data-[hover]:text-gray-700';
	}
};
