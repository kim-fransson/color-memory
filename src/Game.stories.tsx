import Game from "./Game";
import type { Meta, StoryObj } from "@storybook/react";
import { GameProvider } from "./context/GameContext";

const meta: Meta<typeof Game> = {
  component: Game,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <GameProvider>
        <Story />
      </GameProvider>
    ),
  ],
  args: {},
};
export default meta;

type Story = StoryObj<typeof Game>;

export const Playground: Story = {
  args: {},
};
