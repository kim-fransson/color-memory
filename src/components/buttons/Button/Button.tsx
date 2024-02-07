import { cva, VariantProps } from "class-variance-authority";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { twJoin } from "tailwind-merge";

const button = cva(
  [
    "text-button uppercase rounded-2xl text-black transition-all outline-none shadow-button",
    "pressed:translate-y-1.5 pressed:shadow-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow-400",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      intent: {
        text: ["py-2 px-5"],
        icon: [
          "p-3 text-white bg-gray shadow-[#152229] hover:bg-light-gray hover:shadow-[#152229]",
        ],
      },
      color: {
        silver: [
          "bg-silver shadow-[#9a9a9a] hover:bg-light-silver hover:shadow-[#b6b6b6] ",
        ],
        blue: [
          "bg-blue shadow-[#00bdc9] hover:bg-light-blue hover:shadow-[#71c6cc]",
        ],
        orange: ["bg-orange shadow-[#cc861e] hover:bg-light-orange"],
      },
    },
    defaultVariants: {
      intent: "text",
    },
  },
);

type ButtonProps = {
  className?: string;
} & AriaButtonProps &
  VariantProps<typeof button>;

export const Button = ({
  intent = "text",
  color,
  className,
  ...reactAriaProps
}: ButtonProps) => {
  return (
    <AriaButton
      {...reactAriaProps}
      className={twJoin(button({ intent, color }), className)}
    >
      {reactAriaProps.children}
    </AriaButton>
  );
};
