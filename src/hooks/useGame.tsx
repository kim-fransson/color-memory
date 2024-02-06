import { GameContext } from "@/context/GameContext";
import { useContext } from "react";

export const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined || context === null) {
    throw new Error("useGame was used outside of its Provider");
  }

  return context;
};
