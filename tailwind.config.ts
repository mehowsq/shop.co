import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi-Light", "sans-serif"],
      integralCF: ["Integral CF", "san-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
