import { Button } from "./Button/Button";

import SoundOn from "@assets/icons/sound-on-icon.svg?react";
import SoundOff from "@assets/icons/sound-off-icon.svg?react";
import { useSound } from "@/hooks";
import { isSafari } from "react-device-detect";
import { twMerge } from "tailwind-merge";

export type SoundToggleProps = {
  className?: string;
};

export const SoundToggle = ({ className }: SoundToggleProps) => {
  const { isMuted, toggleMute } = useSound();
  return (
    <div
      className={twMerge(
        isSafari ? "tooltip tooltip-left" : "inline-block",
        className,
      )}
      data-tip={isSafari ? "audio disabled on safari" : ""}
    >
      <Button isDisabled={isSafari} onPress={toggleMute} intent="icon">
        {isMuted ? <SoundOff /> : <SoundOn />}
      </Button>
    </div>
  );
};
