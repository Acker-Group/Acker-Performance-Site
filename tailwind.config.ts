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
        accent: 'var(--accent)',
        primary: 'var(--background)',
        secondary: 'var(--gray-50)',
        card: 'var(--gray-100)',
        'text-primary': 'var(--text)',
        'text-secondary': 'var(--gray-900)',
        'jet-black': 'var(--background)',
      },
    },
  },
  plugins: [],
};

export default config;
