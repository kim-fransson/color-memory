import { Gamepad } from "@/components/displays";
import { useGame } from "@/hooks";
import { useMemo, useState } from "react";
import BeepSound from "@assets/sounds/color-ping.mp3";
import { useLocalStorage } from "@uidotdev/usehooks";

export const GamePlay = () => {
  const { addPoint, sequence, gameOver, nextTurn, score } = useGame();
  const [bestScore, setBestScore] = useLocalStorage("best-score", 0);

  const [activeIndex, setActiveIndex] = useState(0);
  const beep = useMemo(() => new Audio(BeepSound), []);

  const handleSelect = (color: Color) => {
    beep.currentTime = 0;
    beep.play();
    if (color !== sequence[activeIndex]) {
      return gameOver();
    }

    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
    addPoint();
    if (activeIndex === sequence.length - 1) {
      nextTurn();
    } else {
      setActiveIndex((curr) => curr + 1);
    }
  };

  return (
    <div className="absolute-center">
      <div className="inline-grid justify-items-center md:gap-8 gap-4">
        <h2 className="md:text-heading-m text-heading-m-mobile">YOUR TURN</h2>
        <Gamepad
          onPressBlue={() => handleSelect("blue")}
          onPressGreen={() => handleSelect("green")}
          onPressRed={() => handleSelect("red")}
          onPressYellow={() => handleSelect("yellow")}
        />
        <span className="text-heading-l">SCORE: {score}</span>
      </div>
    </div>
  );
};
