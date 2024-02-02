import { cva, VariantProps } from 'class-variance-authority';
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';
import { twJoin } from 'tailwind-merge';

const button = cva([
  "outline-none pressed:scale-95 transition-all rounded-tr-full min-w-8 min-h-8",
], {
  variants: {
    state: {
      active: [],
      inactive: []
    },
    color: {
      green: ["-rotate-90 hover:bg-green focus-visible:bg-green"],
      red: ["hover:bg-red focus-visible:bg-red"],
      blue: ["hover:bg-blue focus-visible:bg-blue rotate-90"],
      yellow: ["hover:bg-light-orange focus-visible:bg-light-orange  rotate-180"]
    }
  },
  compoundVariants: [
    {
      state: "active",
      color: "green",
      className: "bg-green",
    },
    {
      state: "inactive",
      color: "green",
      className: "bg-[#5d9c6e]",
    },
    {
      state: "active",
      color: "red",
      className: "bg-red"
    },
    {
      state: 'inactive',
      color: 'red',
      className: "bg-[#935457]"
    },
    {
      state: "active",
      color: "blue",
      className: "bg-blue"
    },
    {
      state: "inactive",
      color: "blue",
      className: "bg-[#487499]"
    },
    {
      state: "active",
      color: "yellow",
      className: "bg-light-orange"
    },
    {
      state: 'inactive',
      color: "yellow",
      className: "bg-[#8d7345]"
    }
  ],
  defaultVariants: {
    state: 'inactive',
  },
})

type QuadrantButtonProps = {
  className?: string;
} & Omit<AriaButtonProps, 'children'> & VariantProps<typeof button>

export const QuadrantButton = ({ color, state, className, ...reactAriaProps }: QuadrantButtonProps) => {
  return (
    <AriaButton
      {...reactAriaProps} className={twJoin(button({ color, state }), className)}
    />
  )
}