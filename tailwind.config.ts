import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        "oxford-blue": "#0A1128",
        "electric-blue": "#007FFF",
        "vivid-orange": "#FF6F00",
        platinum: "#E5E5E5",
        "dark-background": "#0A1128", // Corresponds to Oxford Blue
        "primary-text": "#E5E5E5", // Corresponds to Platinum
        "secondary-text": "#A0AEC0", // A lighter gray for secondary text
        "muted-text": "#718096", // A darker gray for muted text
        "charge-green": "#00C853", // Green for eco
        "charge-blue": "#2196F3", // Blue for tech
        "subtle-red": "#EF5350", // Subtle red accent
        "pure-white": "#FFFFFF", // Pure white
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-x": "gradient-x 4s ease infinite",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config
