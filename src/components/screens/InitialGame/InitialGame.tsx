import { Button } from "@/components/buttons";
import { Gamepad } from "@/components/displays";
import { useGame } from "@/hooks";

export const InitialGame = () => {
  const { startCountdown } = useGame();
  return (
    <div className="absolute-center">
      <div className="inline-grid justify-items-center md:gap-8 gap-4">
        <h2 className="md:text-heading-m text-heading-m-mobile">
          COLOR MEMORY
        </h2>
        <Gamepad />
        <Button
          onPress={() => startCountdown()}
          color="orange"
          className="w-full"
        >
          NEW GAME
        </Button>
      </div>
    </div>
  );
};
