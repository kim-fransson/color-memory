import { HelpButton, SoundToggle } from "@/components/buttons";
import { PropsWithChildren } from "react";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative min-h-dvh">
      <HelpButton className="absolute md:top-8 md:left-8 top-4 left-4" />
      <SoundToggle className="absolute md:top-8 md:right-8  top-4 right-4" />

      {children}
    </div>
  );
};
