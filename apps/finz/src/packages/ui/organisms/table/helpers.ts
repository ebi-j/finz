import { TableState } from '@finz/lib';

export const getStateStyles = (state: TableState, focused: boolean): string => {
	switch (state) {
		case 'added':
			return `bg-green-200 ${focused ? 'border-green-400' : 'border-green-200'}`;
		case 'removed':
			return `bg-red-200 ${focused ? 'border-red-400' : 'border-red-200'}`;
		case 'committed':
			return 'border-gray-200';
		default:
			return '';
	}
};
