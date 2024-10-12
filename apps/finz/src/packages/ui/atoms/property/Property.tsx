import { PropertyState, PropertyViewModel } from '@finz/lib';
import { BodyRegular } from '../typography/Typography';

const Property = ({ name, state, className }: PropertyViewModel) => {
	const getStateColor = (state: PropertyState): string => {
		switch (state) {
			case 'added':
				return 'bg-green-200';
			case 'removed':
				return 'bg-red-200';
			case 'modified':
				return 'bg-purple-200';
			default:
				return '';
		}
	};

	const highlight = () => {
		console.debug(111);
	};

	return (
		<div className={`px-2 py-1 ${getStateColor(state)} ${className}`} onClick={highlight}>
			<BodyRegular>{name}</BodyRegular>
		</div>
	);
};

export { Property };
