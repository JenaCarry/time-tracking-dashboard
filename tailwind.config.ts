import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "hsl(226, 43%, 10%)",
        profile: "hsl(246, 80%, 60%)",
        "primary-text": "hsl(236, 100%, 87%)",
        card: "hsl(235, 46%, 20%)",
        "card-hover": "hsl(236,41%,34%)",
        buttons: "hsl(235, 45%, 61%)",
      },
    },
  },
  plugins: [],
};
export default config;
