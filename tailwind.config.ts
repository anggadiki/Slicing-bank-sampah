import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        avatar: "url('/avatar.png')",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        mulis: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
