// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['poppins', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [],
};

export default config;