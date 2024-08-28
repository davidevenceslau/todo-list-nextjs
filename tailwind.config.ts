import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "body-background": "#F7F7F7",
        "body-dark-background": "#25282A",
        primay: "#DE7184",
        "primay-highlight": "#EE889A",
        "text-black": "#1E2122",
        "secondary-text": "#B7BCBF",
        "secondary-dark": "#7A8185",
        "dark-background": "#1E2122",
        "todo-border-dashed": "2px",
      },
    },
  },
  plugins: [],
};
export default config;
