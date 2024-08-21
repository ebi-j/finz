import type { Meta, StoryObj } from '@storybook/react';

import { Property } from './Property';

const meta: Meta<typeof Property> = {
	component: Property,
};

export default meta;
type Story = StoryObj<typeof Property>;

export const Default: Story = {
	args: {
		name: 'Property 1',
	},
};
