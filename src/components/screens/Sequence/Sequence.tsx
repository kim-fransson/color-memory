import { Gamepad } from "@/components/displays";
import { useGame, useSound } from "@/hooks";
import { calculateSpeed } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import BeepSound from "@assets/sounds/color-ping.mp3";

export const Sequence = () => {
  const { sequence, level, startGameplay, score } = useGame();
  const beep = useMemo(() => new Audio(BeepSound), []);
  const { isMuted } = useSound();
  const [activeColor, setActiveColor] = useState<Color>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const speed = calculateSpeed(level);

  useEffect(() => {
    if (currentIndex < sequence.length) {
      const delayBeforeStart = currentIndex === 0 ? 1000 : 0;

      const startSequence = () => {
        beep.currentTime = 0;
        if (!isMuted) {
          beep.play();
        }
        setActiveColor(sequence[currentIndex]);

        const timeoutId = setTimeout(() => {
          setActiveColor(undefined);
        }, speed);

        const nextTimeoutId = setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
        }, speed * 2);

        return () => {
          clearTimeout(timeoutId);
          clearTimeout(nextTimeoutId);
        };
      };

      const startDelayId = setTimeout(() => {
        startSequence();
      }, delayBeforeStart);

      return () => {
        clearTimeout(startDelayId);
      };
    } else {
      startGameplay();
    }
  }, [beep, currentIndex, isMuted, sequence, speed, startGameplay]);

  return (
    <div className="absolute-center">
      <div className="inline-grid justify-items-center md:gap-8 gap-4">
        <h2 className="md:text-heading-m text-heading-m-mobile">
          WATCH CLOSELY
        </h2>
        <Gamepad score={score} activeColor={activeColor} isReadOnly />
      </div>
    </div>
  );
};
