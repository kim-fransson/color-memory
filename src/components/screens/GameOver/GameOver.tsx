/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/buttons";
import { Gamepad } from "@/components/displays";
import { useGame, useSound } from "@/hooks";
import { useEffect, useMemo } from "react";
import LoseSound from "@assets/sounds/lose.mp3";

export const GameOver = () => {
  const { score, quit, startCountdown } = useGame();
  const { isMuted } = useSound();
  const lose = useMemo(() => new Audio(LoseSound), []);

  useEffect(() => {
    if (!isMuted) {
      lose.play();
    }
  }, [lose]);

  return (
    <>
      <dialog open id="game_over_modal" className="modal">
        <div className="bg-dark-gray w-[877px] h-[492px] flex flex-col items-center justify-center gap-8 rounded-2xl z-50">
          <h2 className="text-heading-xl">GAME OVER</h2>
          <div className="grid grid-cols-2 gap-12 w-full max-w-md">
            <Button onPress={quit} color="silver">
              QUIT
            </Button>
            <Button onPress={() => startCountdown()} color="orange">
              TRY AGAIN
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </dialog>
      <div className="absolute-center">
        <div className="inline-grid justify-items-center md:gap-8 gap-4">
          <h2 className="md:text-heading-m text-heading-m-mobile">YOUR TURN</h2>
          <Gamepad score={score} isReadOnly />
          <span className="text-heading-l">SCORE: {score}</span>
        </div>
      </div>
    </>
  );
};
