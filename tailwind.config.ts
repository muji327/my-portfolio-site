import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // 明るいブルー
        secondary: "#10B981", // グリーン
        accent: "#F9A8D4", // ピンク
        background: "#F3F4F6", // 背景色
        cardBackground: "#FFFFFF", // カード背景
        cardText: "#1F2937", // カードテキスト
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"], // モダンなフォント
      },
    },
  },
  plugins: [],
} satisfies Config;
