import { useState } from "react";
import { Gamepad } from "../displays";
import { Button } from "./Button/Button";

import QuestionMark from "@assets/icons/game-rules-icon.svg?react";
import { twMerge } from "tailwind-merge";

export type HelpButtonProps = {
  className?: string;
};

export const HelpButton = ({ className }: HelpButtonProps) => {
  const [hideDialog, setHideDialog] = useState(true);
  const openModal = () => {
    const dialog = document.getElementById("help_modal") as HTMLDialogElement;
    dialog.showModal();
    setHideDialog(false);
  };

  const closeModal = () => {
    const dialog = document.getElementById("help_modal") as HTMLDialogElement;
    dialog.close();
    setHideDialog(true);
  };

  return (
    <>
      <Button onPress={openModal} intent="icon" className={className}>
        <QuestionMark />
      </Button>
      <dialog
        id="help_modal"
        className={twMerge("modal", hideDialog ? "hidden" : "")}
      >
        <div className="bg-dark-gray text-white flex flex-col rounded-2xl h-[450px] w-[770px] items-center justify-center z-50">
          <h2 className="text-heading-m">GAME RULES</h2>
          <p className="mt-4 text-body">
            Repeat the upcoming sequences of signals.
          </p>
          <div className="mt-8 flex items-center gap-8">
            <Gamepad isReadOnly size="small" activeColor="green" />
            <Gamepad isReadOnly size="small" activeColor="red" />
            <Gamepad isReadOnly size="small" activeColor="blue" />
            <Gamepad isReadOnly size="small" activeColor="yellow" />
          </div>
          {/* Super ugly hack to avoid autofocus from dialog */}
          <button className="w-0 h-0 absolute outline-none"></button>
          <Button className="w-44 mt-8" onPress={closeModal} color="blue">
            OK
          </Button>
        </div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </dialog>
    </>
  );
};
