import type { Meta, StoryObj } from "@storybook/react";
import { Sequence } from "./Sequence";

const meta: Meta<typeof Sequence> = {
  component: Sequence,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof Sequence>;

export const Playground: Story = {
  args: {},
};
