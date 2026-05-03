/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0a",
          subtle: "#111111",
          elevated: "#161616",
        },
        ink: {
          DEFAULT: "#fafafa",
          muted: "#a1a1aa",
          dim: "#71717a",
        },
        line: "#27272a",
        accent: {
          DEFAULT: "#a3e635",
          subtle: "#1a2912",
        },
      },
    },
  },
  plugins: [],
};
