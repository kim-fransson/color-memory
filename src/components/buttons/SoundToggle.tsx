import { Button } from "./Button/Button";

import SoundOn from "@assets/icons/sound-on-icon.svg?react";
// import SoundOff from "@assets/icons/sound-off-icon.svg?react";

export type SoundToggleProps = {
  className?: string;
};

export const SoundToggle = ({ className }: SoundToggleProps) => {
  return (
    <Button intent="icon" className={className}>
      <SoundOn />
    </Button>
  );
};
