import type { Meta, StoryObj } from '@storybook/react';
import { Wordle } from '.';

const meta = {
  title: 'Wordle',
  component: Wordle,
} satisfies Meta<typeof Wordle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (<Wordle />)
}
