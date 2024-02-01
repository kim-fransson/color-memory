import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import QuestionMark from "@assets/icons/game-rules-icon.svg?react"

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {},
  args: {
    children: 'Button',
    "aria-label": 'button'
  },
  decorators: [
    (ButtonStory) => <div className="bg-[#6b8899] rounded-2xl p-4">
      <ButtonStory />
    </div>
  ]
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Silver: Story = {
  args: {
    color: 'silver'
  },
};

export const Blue: Story = {
  args: {
    color: 'blue'
  },
};

export const Orange: Story = {
  args: {
    color: 'orange'
  },
};

export const Icon: Story = {
  args: {
    intent: 'icon',
    children: <QuestionMark />
  },
};
