import type { Meta, StoryObj } from "@storybook/react";
import { GamePlay } from "./GamePlay";

const meta: Meta<typeof GamePlay> = {
  component: GamePlay,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof GamePlay>;

export const Playground: Story = {
  args: {},
};
