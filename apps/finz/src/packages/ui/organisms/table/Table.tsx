import { Property, PropertyProps } from '../../atoms/property/Property';
import { SectionTitle } from '../../atoms/typography/Typography';
import styles from './Table.module.css';
import { TableState } from '../../../shared/models';

interface TableProps {
	name: string;
	propertyList: PropertyProps[];
	state: TableState;
}

const Table = ({ name, propertyList, state }: TableProps) => {
	const getStateColor = (state: TableState): string => {
		switch (state) {
			case 'added':
				return 'bg-green-200 border-green-200';
			case 'removed':
				return 'bg-red-200 border-red-200';
			case 'committed':
				return 'border-gray-200';
			default:
				return '';
		}
	};

	return (
		<div className={`${styles.table} ${getStateColor(state)}`}>
			<div className="px-2 py-1 text-center">
				<SectionTitle>{name}</SectionTitle>
			</div>
			{propertyList.map((propertyProps, index) => (
				<Property key={index} {...propertyProps} />
			))}
		</div>
	);
};

export { Table };
