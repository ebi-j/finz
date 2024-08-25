import type { Meta, StoryObj } from '@storybook/react';
import { Property } from './Property';
import { PropertyStateList } from '../../../shared/models';

const meta: Meta<typeof Property> = {
	component: Property,
	argTypes: {
		state: {
			options: PropertyStateList,
			control: { type: 'select' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Property>;

export const Default: Story = {
	args: {
		name: 'Property 1',
	},
};
