import type { Meta, StoryObj } from '@storybook/react';
import { MemoryGame } from '.';

const meta = {
  title: 'Memory Game',
  component: MemoryGame,
} satisfies Meta<typeof MemoryGame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (<MemoryGame />)
}
