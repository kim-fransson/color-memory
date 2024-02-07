import { PropsWithChildren, createContext, useMemo, useState } from "react";
import { isSafari } from "react-device-detect";

export const SoundContext = createContext({
  isMuted: false,
  toggleMute: () => {},
});

export const SoundProvider = ({ children }: PropsWithChildren) => {
  const [isMuted, setIsMuted] = useState(isSafari);

  const memoizedValue = useMemo(() => {
    return {
      isMuted,
      toggleMute: () => setIsMuted((curr) => !curr),
    };
  }, [isMuted]);

  return (
    <SoundContext.Provider value={memoizedValue}>
      {children}
    </SoundContext.Provider>
  );
};
