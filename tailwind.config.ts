import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
