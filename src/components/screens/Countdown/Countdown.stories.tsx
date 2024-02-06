import type { Meta, StoryObj } from "@storybook/react";
import { Countdown } from "./Countdown";

const meta: Meta<typeof Countdown> = {
  component: Countdown,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof Countdown>;

export const Playground: Story = {
  args: {},
};
