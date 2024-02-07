/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useMemo, useEffect, useRef } from "react";
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

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = document.getElementById(
      "countdown_modal",
    ) as HTMLDialogElement;
    dialog.showModal();
  });

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
    const dialogElement = ref.current;

    const startCountdown = () => {
      setCount(COUNTDOWN_FROM);
      setShowStart(false);
      countdownBeep.currentTime = 0;

      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount > 0 && !isMuted) {
            countdownBeep.play();
          }

          if (prevCount <= 1) {
            countdownEnd.currentTime = 0;
            clearInterval(timer);
            setTimeout(() => {
              setShowStart(true);
              if (!isMuted) {
                countdownEnd.play();
              }
            }, 1000);

            setTimeout(() => {
              handleCountdownEnd();
            }, 2200);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
        countdownBeep.pause();
        countdownBeep.currentTime = 0;
        countdownEnd.currentTime = 0;
      };
    };

    if (dialogElement) {
      if (dialogElement.open) {
        startCountdown();
      }

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "open" && dialogElement.open) {
            startCountdown();
          }
        });
      });

      observer.observe(dialogElement, { attributes: true });

      return () => observer.disconnect();
    }
  }, [countdownBeep, countdownEnd, ref]);

  const customStyle = {
    "--value": count,
  } as React.CSSProperties;

  return (
    <>
      <dialog ref={ref} id="countdown_modal" className="modal">
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
