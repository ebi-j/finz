import type { NodeTypes } from '@xyflow/react';
import { TableNode, TableNodeRenderer } from './TableNode';
import { v4 as uuidv4 } from 'uuid';

export const initialNodes: TableNode[] = [
	{
		id: uuidv4(),
		type: 'table-node',
		position: { x: 0, y: 0 },
		data: {
			name: 'table',
			propertyList: [],
			state: 'added',
			focused: false,
		},
	},
];

export const nodeTypes = {
	'table-node': TableNodeRenderer,
	// Add any of your custom nodes here!
} satisfies NodeTypes;
