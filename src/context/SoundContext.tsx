import { PropsWithChildren, createContext, useMemo, useState } from "react";

export const SoundContext = createContext({
  isMuted: false,
  toggleMute: () => {},
});

export const SoundProvider = ({ children }: PropsWithChildren) => {
  const [isMuted, setIsMuted] = useState(false);

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
