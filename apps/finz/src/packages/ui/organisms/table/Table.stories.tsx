import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';
import { TableState, TableStateList } from '@finz/lib';

const meta: Meta<typeof Table> = {
	component: Table,
	argTypes: {
		model: {
			state: {
				options: TableStateList as readonly TableState[],
				control: { type: 'select' },
			},
		},
		focused: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
	args: {
		model: {
			name: 'Table 1',
			state: 'committed',
			propertyList: [
				{ name: 'Property 1', state: 'committed' },
				{ name: 'Property 2', state: 'added' },
			],
		},
		focused: false,
	},
};
