import reactAriaComponents from "tailwindcss-react-aria-components";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssGridAreas from "@savvywombat/tailwindcss-grid-areas";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      'heading-xl': ['96px', {
        fontWeight: '800',
        letterSpacing: '0.05em',
      }],
      'heading-l': ['48px', {
        fontWeight: '800',
        letterSpacing: '0.1em',
      }],
      'heading-m': ['36px', {
        fontWeight: '800',
        letterSpacing: '0.05em',
      }],
      'heading-m-mobile': ['30px', {
        fontWeight: '800',
        letterSpacing: '0.05em',
      }],
      'heading-s': ['24px', {
        fontWeight: '800',
        letterSpacing: '0.05em',
      }],
      'button': ['24px', {
        fontWeight: '700',
        letterSpacing: '0.02em',
      }],
      'body': ['24px', {
        fontWeight: '500',
        letterSpacing: '0.05em',
      }],
      'body-mobile': ['20px', {
        fontWeight: '500',
        letterSpacing: '0.05em',
      }],
    },
    extend: {
      colors: {
        background: "#1a2a33",
        "dark-gray": "#263943",
        gray: "#354a56",
        silver: "#c0c0c0",
        "light-silver": "#e4e4e4",
        "orange": "#ffa726",
        "light-orange": "#ffbb57",
        "dark-blue": "#77beff",
        "blue": "#00ecfb",
        "light-blue": "#8df8ff",
        "red": "#ff6f6c",
        "green": "#95ff9a",
      },
      opacity: {
        32: 0.32
      },
      boxShadow: {
        'button': '0 6px 0',
      },
      gridTemplateAreas: {},
      gridTemplateColumns: {},
      gridTemplateRows: {},
    },
  },
  plugins: [
    reactAriaComponents,
    tailwindcssAnimate,
    // https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227#issuecomment-1139895799
    ({ addUtilities }) => {
      addUtilities({});
    },
    tailwindcssGridAreas,
  ],
};
