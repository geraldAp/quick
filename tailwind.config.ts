import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        customBlue: {
          100: "#3498db",
          200: "#2980b9",
          300: "#2c3e50",
        },

        primaryTheme: {
          10:"#f8f7ff",
          50:"#f0ebff",
          100: "#1bcfb4",
          200: "#a05aff",
          300: "#7a3bcc",
          400: "#3a0080",
        },
        supportingTheme: {
          100: "#4bcbeb",
          200: "#fe9496",
          300: "#9e58ff",
        },
        statusTheme: {
          completed_100: "#36B37E",
          completed_200: "#E6F4EB", // Lighter shade for containers
          ongoing_100: "#FFA500",
          ongoing_200: "#FFE5CC", // Lighter shade for containers
          hold_100: "#FF5733",
          hold_200: "#FFD9BF", // Lighter shade for containers
        },

        priorityTheme: {
          high_100: "#FF5733",
          high_200: "#FFD9BF", // Lighter shade for containers
          medium_100: "#FFA500",
          medium_200: "#FFE5CC", // Lighter shade for containers
          low_100: "#36B37E",
          low_200: "#E6F4EB", // Lighter shade for containers
        },

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
} satisfies Config;

export default config;
