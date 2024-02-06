import { Button } from "@/components/buttons";
import { Gamepad } from "@/components/displays";
import { useGame } from "@/hooks";
import { useWindowSize } from "@uidotdev/usehooks";
import ReactConfetti from "react-confetti";

const messages = [
  { message: "Great job! 🌟" },
  { message: "Excellent work! 👏" },
  { message: "Superb! 🎉" },
  { message: "Perfect finish! ✨" },
  { message: "Bravo! 🥳" },
  { message: "Nicely done! 👍" },
  { message: "Level mastered! 🏆" },
  { message: "Phenomenal! 💥" },
  { message: "Fantastic! 🚀" },
  { message: "A+ effort! 🌈" },
  { message: "Victory! 🏁" },
  { message: "Amazing achievement! 🎖️" },
  { message: "Level conquered! 🗺️" },
  { message: "Outstanding performance! 🙌" },
  { message: "You nailed it! 🔨" },
  { message: "Success! 🍾" },
  { message: "Top-notch! 🥇" },
  { message: "Splendid! 💫" },
  { message: "Level up! ⬆️" },
  { message: "Ace! 🃏" },
  { message: "Champion! 🏅" },
  { message: "You did it! 🎯" },
  { message: "Stellar! 🌠" },
  { message: "Unbeatable! 🛡️" },
  { message: "Level complete! 🎮" },
];

export const NextTurn = () => {
  const { level, startCountdown, score } = useGame();
  const { height, width } = useWindowSize();
  return (
    <>
      <ReactConfetti width={width ?? undefined} height={height ?? undefined} />
      <div className="absolute-center">
        <div className="inline-grid justify-items-center md:gap-8 gap-4">
          <h2 className="md:text-heading-m text-heading-m-mobile">
            {messages[level - 0].message}
          </h2>
          <Gamepad isReadOnly />
          <Button
            onPress={() => startCountdown(level, score)}
            color="orange"
            className="w-full"
          >
            NEXT LEVEL
          </Button>
        </div>
      </div>
    </>
  );
};