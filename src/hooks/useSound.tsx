import { SoundContext } from "@/context/SoundContext";
import { useContext } from "react";

export const useSound = () => {
  const context = useContext(SoundContext);

  if (context === undefined || context === null) {
    throw new Error("useSound was used outside of its Provider");
  }

  return context;
};
