import Game from "./Game";
import type { Meta, StoryObj } from "@storybook/react";
import { GameProvider } from "./context/GameContext";
import { SoundProvider } from "./context/SoundContext";

const meta: Meta<typeof Game> = {
  component: Game,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <SoundProvider>
        <GameProvider>
          <Story />
        </GameProvider>
      </SoundProvider>
    ),
  ],
  args: {},
};
export default meta;

type Story = StoryObj<typeof Game>;

export const Playground: Story = {
  args: {},
};
