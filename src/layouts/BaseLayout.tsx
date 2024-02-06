import { HelpButton, SoundToggle } from "@/components/buttons";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PropsWithChildren } from "react";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const [bestScore] = useLocalStorage("best-score", 0);
  return (
    <div className="relative min-h-dvh">
      <HelpButton className="absolute md:top-8 md:left-8 top-4 left-4" />
      <SoundToggle className="absolute md:top-8 md:right-8  top-4 right-4" />

      {children}

      {bestScore > 0 && (
        <span className="absolute text-heading-s md:bottom-8 md:left-8 bottom-4 left-4">
          BEST SCORE: {bestScore}
        </span>
      )}
    </div>
  );
};
