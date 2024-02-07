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

  const closeModal = () => {
    const dialog = document.getElementById(
      "game_over_modal",
    ) as HTMLDialogElement;
    dialog.close();
  };

  useEffect(() => {
    const dialog = document.getElementById(
      "game_over_modal",
    ) as HTMLDialogElement;
    dialog.showModal();
    if (!isMuted) {
      lose.play();
    }
  }, []);

  return (
    <>
      <dialog id="game_over_modal" className="modal">
        <div className="bg-[#1a2a33] lg:w-[877px] w-full h-[492px] flex flex-col items-center justify-center gap-8 lg:rounded-2xl rounded-none z-50">
          <h2 className="md:text-heading-xl text-heading-m">GAME OVER</h2>
          <div className="grid md:grid-cols-2 grid-cols md:gap-12 gap-8 w-full md:max-w-md max-w-[200px]">
            {/* Super ugly hack to avoid autofocus from dialog */}
            <button className="w-0 h-0 absolute outline-none"></button>
            <Button
              onPress={() => {
                closeModal();
                quit();
              }}
              color="silver"
            >
              QUIT
            </Button>
            <Button
              onPress={() => {
                closeModal();
                startCountdown();
              }}
              color="orange"
            >
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
        </div>
      </div>
    </>
  );
};
