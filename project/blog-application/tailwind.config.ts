import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {},
  		transitionProperty: {
  			'0.9': 'all 3s ease-in-out'
  		},
  		backgroundImage: {
  			'signup': "url('/images/signup-background.svg')",
  		},
  	}
  },
  plugins: [],
} satisfies Config;
