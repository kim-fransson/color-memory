import { QuadrantButton } from "@/components/buttons/QuadrantButton/QuadrantButton";
import { VariantProps, cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const gamepad = cva(["rounded-full bg-dark-gray flex justify-center items-center"], {
  variants: {
    size: {
      small: ["h-[128px] w-[128px]"],
      medium: ["h-[414px] w-[414px]"]
    },

  },
  defaultVariants: {
    size: 'medium',
  },
})

type GamepadProps = {
  className?: string;
  onPressGreen: () => void;
  onPressRed: () => void;
  onPressBlue: () => void;
  onPressYellow: () => void;
  activeColor?: 'green' | 'red' | 'blue' | 'yellow';
} & VariantProps<typeof gamepad>


export const Gamepad = ({ className, ...rest }: GamepadProps) => {
  const { size = 'medium', activeColor } = rest;
  const { onPressGreen, onPressRed, onPressBlue, onPressYellow } = rest;

  return (
    <div className={twMerge(gamepad({ size }), className)}>
      <div className={twMerge(
        "h-[360px] w-[360px] grid grid-cols-2 relative",
        size === "medium" ? "h-[360px] w-[360px]" : "h-[111px] w-[111px]"
      )}>
        <QuadrantButton
          state={activeColor === "green" ? "active" : "inactive"}
          onPress={onPressGreen}
          className="order-1"
          isDisabled={activeColor !== undefined}
          color="green" />
        <QuadrantButton
          state={activeColor === "red" ? "active" : "inactive"}
          onPress={onPressRed}
          className="order-2"
          isDisabled={activeColor !== undefined}
          color="red" />
        <QuadrantButton
          state={activeColor === "blue" ? "active" : "inactive"}
          onPress={onPressBlue}
          className="order-4"
          isDisabled={activeColor !== undefined}
          color="blue" />
        <QuadrantButton
          state={activeColor === "yellow" ? "active" : "inactive"}
          onPress={onPressYellow}
          className="order-3"
          isDisabled={activeColor !== undefined}
          color="yellow" />
        <div className={twMerge(
          "rounded-full bg-dark-gray absolute-center z-50",
          size === "medium" ? "h-[183px] w-[183px]" : "h-[57px] w-[57px]"
        )} />
        <div className={twMerge(
          "bg-dark-gray absolute-center z-40",
          size === "medium" ? "h-[30px] w-full" : "h-[10px] w-full"
        )} />
        <div className={twMerge(
          " bg-dark-gray absolute-center z-40",
          size === "medium" ? "h-full w-[30px]" : "h-full w-[10px]"
        )} />
      </div>
    </div>
  )
}