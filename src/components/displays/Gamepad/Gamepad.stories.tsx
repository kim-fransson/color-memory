import { Gamepad } from "./Gamepad";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Gamepad> = {
  component: Gamepad,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    onPressGreen: { actions: 'pressed green' },
    onPressRed: { actions: 'pressed red' },
    onPressBlue: { actions: 'pressed blue' },
    onPressYellow: { actions: 'pressed yellow' },
  }
};
export default meta;

type Story = StoryObj<typeof Gamepad>;

export const Playground: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-8 items-center">
      <Gamepad {...args} size="medium" />
      <Gamepad {...args} size="small" />
    </div>
  )
};

export const Readonly: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-8 items-center">
      <Gamepad {...args} size="medium" activeColor="blue" />
      <Gamepad {...args} size="small" activeColor="blue" />
    </div>
  )
};
