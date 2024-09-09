/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js,jsx,ts}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        }
      },
      boxShadow: {
        custom: 'var(--card-shadow)'
      }
    }
  },
  plugins: []
}
