import { cva, VariantProps } from 'class-variance-authority';
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';

const button = cva([
  "text-button uppercase rounded-2xl text-black transition-all outline-none shadow-button",
  "pressed:translate-y-1.5 pressed:shadow-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
], {
  variants: {
    intent: {
      text: ["py-2 px-5"],
      icon: ["p-3 text-white bg-dark-gray shadow-[#566d7a] hover:bg-gray hover:shadow-[#566d7a]"]
    },
    color: {
      silver: ["bg-silver shadow-[#9a9a9a] hover:bg-light-silver hover:shadow-[#b6b6b6] "],
      blue: ["bg-blue shadow-[#00bdc9] hover:bg-light-blue hover:shadow-[#71c6cc]"],
      orange: ["bg-orange shadow-[#cc861e] hover:bg-light-orange hover:shadow-[#cc9646]"],
    }
  },
  defaultVariants: {
    intent: 'text',
    color: 'silver'
  },
})

type ButtonProps = AriaButtonProps & VariantProps<typeof button>

export const Button = ({ intent, color, ...reactAriaProps }: ButtonProps) => {
  return (
    <AriaButton {...reactAriaProps} className={button({ intent, color })}>
      {reactAriaProps.children}
    </AriaButton>
  )
}