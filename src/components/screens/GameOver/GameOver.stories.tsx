import type { Meta, StoryObj } from "@storybook/react";
import { GameOver } from "./GameOver";

const meta: Meta<typeof GameOver> = {
  component: GameOver,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof GameOver>;

export const Playground: Story = {
  args: {},
};
