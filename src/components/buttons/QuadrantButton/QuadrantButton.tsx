import { cva, VariantProps } from 'class-variance-authority';
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';

import Quadrant from "@assets/quadrant.svg?react";
import QuadrantSmall from "@assets/quadrant-small.svg?react";

const button = cva([
  "outline-none pressed:scale-95 transition-all hover:opacity-100 focus-visible:opacity-100",
], {
  variants: {
    size: {
      small: [],
      medium: []
    },
    state: {
      active: ["opacity-100"],
      inactive: ["opacity-50"]
    },
    color: {
      green: ["text-green -rotate-90"],
      red: ["text-red"],
      blue: ["text-dark-blue rotate-90"],
      yellow: ["text-light-orange rotate-180"]
    }
  },
  defaultVariants: {
    state: 'inactive',
    size: 'medium'
  },
})

type QuadrantButtonProps = Omit<AriaButtonProps, 'children'> & VariantProps<typeof button>

export const QuadrantButton = ({ size = "medium", color, state = "inactive", ...reactAriaProps }: QuadrantButtonProps) => {
  return (
    <AriaButton
      {...reactAriaProps} className={button({ size, color, state })}
      isDisabled={state === "active"}
    >
      {size === "medium" ? <Quadrant /> : <QuadrantSmall />}
    </AriaButton>
  )
}