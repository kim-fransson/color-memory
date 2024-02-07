import { QuadrantButton } from "@/components/buttons/QuadrantButton/QuadrantButton";
import { VariantProps, cva } from "class-variance-authority";
import { twJoin, twMerge } from "tailwind-merge";

const gamepad = cva(
  [
    "rounded-full bg-dark-gray flex justify-center items-center relative overflow-hidden",
  ],
  {
    variants: {
      size: {
        small: ["md:h-[128px] md:w-[128px] h-[90px] w-[90px]"],
        medium: ["md:h-[414px] md:w-[414px] w-[280px] h-[280px]"],
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

type GamepadProps = {
  className?: string;
  onPressGreen?: () => void;
  onPressRed?: () => void;
  onPressBlue?: () => void;
  onPressYellow?: () => void;
  activeColor?: Color;
  isReadOnly?: boolean;
  score?: number;
} & VariantProps<typeof gamepad>;

export const Gamepad = ({
  className,
  isReadOnly,
  score,
  ...rest
}: GamepadProps) => {
  const { size = "medium", activeColor } = rest;
  const { onPressGreen, onPressRed, onPressBlue, onPressYellow } = rest;

  return (
    <div className={twJoin(gamepad({ size }), className)}>
      <div
        className={twMerge(
          "grid grid-cols-2",
          size === "medium"
            ? "md:h-[360px] md:w-[360px] h-[243px] w-[243px]"
            : "md:h-[111px] md:w-[111px] h-[80px] w-[80px]",
        )}
      >
        <QuadrantButton
          state={activeColor === "green" ? "active" : "inactive"}
          onPress={onPressGreen}
          className="order-1"
          isDisabled={activeColor !== undefined || isReadOnly}
          color="green"
        />
        <QuadrantButton
          state={activeColor === "red" ? "active" : "inactive"}
          onPress={onPressRed}
          className="order-2"
          isDisabled={activeColor !== undefined || isReadOnly}
          color="red"
        />
        <QuadrantButton
          state={activeColor === "blue" ? "active" : "inactive"}
          onPress={onPressBlue}
          className="order-4"
          isDisabled={activeColor !== undefined || isReadOnly}
          color="blue"
        />
        <QuadrantButton
          state={activeColor === "yellow" ? "active" : "inactive"}
          onPress={onPressYellow}
          className="order-3"
          isDisabled={activeColor !== undefined || isReadOnly}
          color="yellow"
        />
        <div
          className={twMerge(
            "rounded-full bg-dark-gray absolute-center z-50 flex items-center justify-center",
            size === "medium"
              ? "md:h-[183px] md:w-[183px] h-[124px] w-[124px]"
              : "md:h-[57px] md:w-[57px] h-[38px] w-[38px]",
          )}
        >
          <span className="text-heading-l">{score}</span>
        </div>
        <div
          className={twMerge(
            "bg-dark-gray absolute-center z-40",
            size === "medium"
              ? "md:h-[30px] h-[20px] w-full"
              : "h-[10px] w-full",
          )}
        />
        <div
          className={twMerge(
            " bg-dark-gray absolute-center z-40",
            size === "medium"
              ? "h-full md:w-[30px] w-[20px]"
              : "h-full w-[10px]",
          )}
        />
      </div>
    </div>
  );
};
