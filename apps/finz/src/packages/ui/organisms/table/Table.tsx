import { useEffect, useRef, useState } from 'react';
import { Property } from '../../atoms/property/Property';
import { SectionTitle } from '../../atoms/typography/Typography';
import styles from './Table.module.css';
import { getStateStyles } from './helpers';
import { InlineInput } from '../../molecules/input/InlineInput';
import { PropertyViewModel, TableViewModel } from '@finz/lib';
import { ENTER_KEY } from '../../../shared/constant';

interface TableViewProps {
	model: TableViewModel;
	focused: boolean;
}

const Table = ({ model: { name, propertyList, state }, focused }: TableViewProps) => {
	const [table, setTable] = useState<TableViewModel>({ name, propertyList, state });
	const [nameInEdit, setNameInEdit] = useState<boolean>(false);
	const nameRef = useRef<HTMLInputElement>(null);
	const newPropertyRef = useRef<HTMLInputElement>(null);

	const editTableName = () => {
		setNameInEdit(true);
	};

	useEffect(() => {
		setNameInEdit(focused && nameInEdit);
	}, [focused]);

	const updateTableName = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === ENTER_KEY && nameRef.current && nameRef.current.value.length > 0) {
			setTable({ ...table, name: nameRef.current.value });
			setNameInEdit(false);
		}
	};

	const updateProperties = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === ENTER_KEY && newPropertyRef.current && newPropertyRef.current.value.length > 0) {
			setTable({
				...table,
				propertyList: [...table.propertyList, { name: newPropertyRef.current.value, state: 'added' }],
			});
			newPropertyRef.current.value = '';
		}
	};

	return (
		<div className={`${styles.table} ${getStateStyles(table.state, focused)}`}>
			<div className="px-2 py-1 text-center">
				{!nameInEdit || table.state === 'removed' ? (
					<SectionTitle onDoubleClick={editTableName}>{table.name}</SectionTitle>
				) : (
					<InlineInput ref={nameRef} name="name" defaultValue={table.name} onKeyUp={updateTableName} />
				)}
			</div>
			{table.propertyList.map((propertyProps, index) => (
				<Property
					key={index}
					name={propertyProps.name}
					state={propertyProps.state}
					className={
						table.propertyList.length === index + 1 && (!focused || table.state === 'removed') ? 'rounded-b-lg' : ''
					}
				/>
			))}
			{focused && !nameInEdit && table.state !== 'removed' && (
				<div className="p-2">
					<InlineInput name="newProperty" ref={newPropertyRef} onKeyUp={updateProperties} />
				</div>
			)}
		</div>
	);
};

export { Table };
