import type { Meta, StoryObj } from "@storybook/react";
import { NextTurn } from "./NextTurn";

const meta: Meta<typeof NextTurn> = {
  component: NextTurn,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof NextTurn>;

export const Playground: Story = {
  args: {},
};
