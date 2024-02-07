import { Button } from "./Button/Button";

import SoundOn from "@assets/icons/sound-on-icon.svg?react";
import SoundOff from "@assets/icons/sound-off-icon.svg?react";
import { useSound } from "@/hooks";

export type SoundToggleProps = {
  className?: string;
};

export const SoundToggle = ({ className }: SoundToggleProps) => {
  const { isMuted, toggleMute } = useSound();
  return (
    <Button onPress={toggleMute} intent="icon" className={className}>
      {isMuted ? <SoundOff /> : <SoundOn />}
    </Button>
  );
};
