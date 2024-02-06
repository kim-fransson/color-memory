import {
  InitialGame,
  Sequence,
  Countdown,
  GamePlay,
  GameOver,
  NextTurn,
} from "./components/screens";
import { useGame } from "./hooks";
import { BaseLayout } from "./layouts";

export default function Game() {
  const { currentStep } = useGame();

  const renderContentByStep = () => {
    switch (currentStep) {
      case "INITIAL": {
        return <InitialGame />;
      }
      case "COUNTDOWN": {
        return <Countdown />;
      }
      case "SEQUENCE": {
        return <Sequence />;
      }
      case "GAMEPLAY": {
        return <GamePlay />;
      }
      case "GAME_OVER":
        return <GameOver />;
      case "NEXT_TURN":
        return <NextTurn />;
    }
  };

  return <BaseLayout>{renderContentByStep()}</BaseLayout>;
}
