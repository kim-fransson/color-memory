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
        <span className="absolute text-heading-s md:bottom-8 md:left-8 bottom-14 left-4">
          BEST SCORE: {bestScore}
        </span>
      )}

      <div className="flex items-center gap-2 absolute md:right-8 md:left-auto left-4 md:bottom-8 bottom-4">
        <span className="select-none rounded-lg bg-[#672871] px-2 py-1 text-gray-100 text-sm font-medium">
          Designs from
        </span>
        <a
          className="text-sm font-medium hover:text-[#672871]"
          href="https://bigdevsoon.me/"
          target="_blank"
          title="BigDevSoon"
        >
          BigDevSoon.me
        </a>
      </div>
    </div>
  );
};
