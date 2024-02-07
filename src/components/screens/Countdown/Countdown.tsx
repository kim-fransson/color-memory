/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useMemo, useEffect } from "react";
import CountdownBeep from "@assets/sounds/countdown-beep.m4a";
import CountdownEnd from "@assets/sounds/countdown-end.m4a";
import { useGame, useSound } from "@/hooks";
import { Gamepad } from "@/components/displays";
import { Button } from "@/components/buttons";

const COUNTDOWN_FROM = 3;

export const Countdown = () => {
  const countdownBeep = useMemo(() => new Audio(CountdownBeep), []);
  const countdownEnd = useMemo(() => new Audio(CountdownEnd), []);
  const [count, setCount] = useState(COUNTDOWN_FROM);
  const [showStart, setShowStart] = useState(false);
  const { startSequence } = useGame();
  const { isMuted } = useSound();

  useEffect(() => {
    const dialog = document.getElementById(
      "countdown_modal",
    ) as HTMLDialogElement;
    dialog.showModal();
  }, []);

  const closeModal = () => {
    const dialog = document.getElementById(
      "countdown_modal",
    ) as HTMLDialogElement;
    dialog.close();
  };

  const handleCountdownEnd = () => {
    startSequence();
    closeModal();
  };

  useEffect(() => {
    setCount(COUNTDOWN_FROM);
    setShowStart(false);
    const timeoutIds = [] as NodeJS.Timeout[];

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0 && !isMuted) {
          countdownBeep.play();
        }

        if (prevCount <= 1) {
          clearInterval(timer);

          const endTimeout = setTimeout(() => {
            setShowStart(true);
            if (!isMuted) {
              countdownEnd.play();
            }
          }, 1000);

          timeoutIds.push(endTimeout);

          const endCountdownTimeout = setTimeout(() => {
            handleCountdownEnd();
          }, 2200);

          timeoutIds.push(endCountdownTimeout);

          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  const customStyle = {
    "--value": count,
  } as React.CSSProperties;

  return (
    <>
      <dialog id="countdown_modal" className="modal outline-none">
        <div
          className="w-screen flex justify-center items-center bg-[#1a2a33]
      h-[348px] text-heading-xl text-white z-50"
        >
          <AnimatePresence>
            {showStart ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                START
              </motion.div>
            ) : (
              <span
                className="countdown"
                onAnimationEnd={() => {
                  console.log("countdown ended");
                }}
              >
                <span style={customStyle} />
              </span>
            )}
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </dialog>
      <div className="absolute-center">
        <div className="inline-grid justify-items-center md:gap-8 gap-4">
          <h2 className="md:text-heading-m text-heading-m-mobile">
            COLOR MEMORY
          </h2>
          <Gamepad />
          <Button color="orange" className="w-full">
            NEW GAME
          </Button>
        </div>
      </div>
    </>
  );
};
