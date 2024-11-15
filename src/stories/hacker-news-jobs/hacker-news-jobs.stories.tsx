import type { Meta, StoryObj } from '@storybook/react';
import { HackerNewsJobs } from '.';

const meta = {
  title: 'HackerNewsJobs',
  component: HackerNewsJobs,
} satisfies Meta<typeof HackerNewsJobs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (<HackerNewsJobs />)
}
