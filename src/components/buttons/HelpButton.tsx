import { Button } from "./Button/Button"

import QuestionMark from "@assets/icons/game-rules-icon.svg?react";

export type HelpButtonProps = {
  className?: string;
}

export const HelpButton = ({ className }: HelpButtonProps) => {
  return (
    <Button intent="icon" className={className}>
      <QuestionMark />
    </Button>
  )
}