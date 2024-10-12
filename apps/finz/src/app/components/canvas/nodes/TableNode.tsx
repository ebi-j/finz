import type { Node, NodeProps } from '@xyflow/react';
import { PropertyViewModel, TableState } from '@finz/lib';
import { Table } from '../../../../packages/ui/organisms/table/Table';

export type TableNodeData = {
	name: string;
	propertyList: PropertyViewModel[];
	state: TableState;
	focused: boolean;
};

export type TableNode = Node<TableNodeData, 'table-node'>;

export const TableNodeRenderer = ({ data }: NodeProps<TableNode>) => {
	const { name, propertyList, state, focused } = data;
	return (
		<div>
			<Table model={{ name, propertyList, state }} focused={focused} />
		</div>
	);
};
