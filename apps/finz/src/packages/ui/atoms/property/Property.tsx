import { PropertyState } from '../../../shared/models';
import { BodyRegular } from '../typography/Typography';

interface PropertyProps {
	name: string;
	state: PropertyState;
}

const Property = ({ name, state }: PropertyProps) => {
	const getStateColor = (state: PropertyState): string => {
    switch(state) {
      case 'added': return 'bg-green-200';
      case 'removed': return 'bg-red-200';
			case 'modified': return 'bg-purple-200';
      default: return '';
    }
  };

	return (
		<div className={`px-2 py-1 ${getStateColor(state)}`}>
			<BodyRegular>{name}</BodyRegular>
		</div>
	);
};

export { Property, PropertyProps };
