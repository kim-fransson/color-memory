import { QuadrantButton } from "./QuadrantButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof QuadrantButton> = {
  component: QuadrantButton,
  parameters: {},
  args: {
    "aria-label": 'QuadrantButton'
  },
  decorators: [
    (QuadrantButtonStory) => <div className="bg-[#354a56] rounded-2xl p-4">
      <QuadrantButtonStory />
    </div>
  ]
};
export default meta;

type Story = StoryObj<typeof QuadrantButton>;

export const Green: Story = {
  args: {
    color: 'green'
  },
  render: (args) => (
    <div className="flex gap-8 items-end">
      <QuadrantButton {...args} />
      <QuadrantButton {...args} state="active" />
      <QuadrantButton {...args} size="small" />
      <QuadrantButton {...args} state="active" size="small" />
    </div>
  )
};

export const Red: Story = {
  args: {
    color: 'red'
  },
  render: (args) => (
    <div className="flex gap-8 items-end">
      <QuadrantButton {...args} />
      <QuadrantButton {...args} state="active" />
      <QuadrantButton {...args} size="small" />
      <QuadrantButton {...args} state="active" size="small" />
    </div>
  )
};
export const Blue: Story = {
  args: {
    color: 'blue'
  },
  render: (args) => (
    <div className="flex gap-8 items-end">
      <QuadrantButton {...args} />
      <QuadrantButton {...args} state="active" />
      <QuadrantButton {...args} size="small" />
      <QuadrantButton {...args} state="active" size="small" />
    </div>
  )
};

export const Yellow: Story = {
  args: {
    color: 'yellow'
  },
  render: (args) => (
    <div className="flex gap-8 items-end">
      <QuadrantButton {...args} />
      <QuadrantButton {...args} state="active" />
      <QuadrantButton {...args} size="small" />
      <QuadrantButton {...args} state="active" size="small" />
    </div>
  )
};
