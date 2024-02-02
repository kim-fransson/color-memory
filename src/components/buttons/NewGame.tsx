
import { Button } from "./Button/Button"

export type NewGameProps = {
  className?: string;
}

export const NewGame = ({ className }: NewGameProps) => {
  return (
    <Button color="orange" className={className}>
      NEW GAME
    </Button>
  )
}