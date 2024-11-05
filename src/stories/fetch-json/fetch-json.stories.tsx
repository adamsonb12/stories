import type { Meta, StoryObj } from '@storybook/react';
import { FetchJson } from '.';

const meta = {
  title: 'FetchJson',
  component: FetchJson,
} satisfies Meta<typeof FetchJson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (<FetchJson />)
}
