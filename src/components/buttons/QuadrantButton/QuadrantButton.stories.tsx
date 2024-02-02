import { QuadrantButton } from "./QuadrantButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof QuadrantButton> = {
  component: QuadrantButton,
  parameters: {},
  args: {
    "aria-label": 'QuadrantButton'
  },
  decorators: [
    (QuadrantButtonStory) => <div className="bg-[#354a56] rounded-2xl p-4 w-20 h-20 flex items-center justify-center">
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
};

export const Red: Story = {
  args: {
    color: 'red'
  },
};
export const Blue: Story = {
  args: {
    color: 'blue'
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow'
  }
};
