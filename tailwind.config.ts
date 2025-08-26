import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#004F71',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#f5f5fa',
          foreground: '#333333'
        },
        muted: {
          DEFAULT: '#f5f5fa',
          foreground: '#666666'
        },
        accent: {
          DEFAULT: '#f5f5fa',
          foreground: '#333333'
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#ffffff'
        },
        border: '#e5e7eb',
        input: '#e5e7eb',
        ring: '#004F71',
        background: '#f5f5fa',
        foreground: '#333333',
        card: '#ffffff',
        'card-foreground': '#333333',
        popover: '#ffffff',
        'popover-foreground': '#333333'
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
