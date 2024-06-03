import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['"SF Pro Text"', '"SF Pro Icons"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        section: '150px',
        features: '100px',
        headlineToBody: '60px',
        bodyToImage: '40px',
      },
      fontSize: {
        base: '17px',
        h1: '80px',
        h2: '4rem',
        h3: '3rem',
        h4: '2.5rem',
        h5: '2rem',
        h6: '1.5rem',
      },
      lineHeight: {
        base: '1.47',
        h1: '84px'
      },
      letterSpacing: {
        base: '-0.022em',
      },
      colors: {
        bodyText: 'rgb(29, 29, 31)',
        headlineText: 'rgb(29, 29, 31)',
        bodyBackground: 'rgb(255, 255, 255)',
        link: 'rgb(0, 102, 204)',
        ctaBlue: 'rgb(37, 99, 235)',
        ctaBlueHover: 'rgb(29, 78, 216)',
        orange: 'rgb(245, 105, 0)',
        third: '#F9E9D9',
        faqHover: '#f0f0f0',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config