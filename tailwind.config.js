/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luminous Academic Hybrid Color Palette Tokens
        surface: {
          DEFAULT: '#f7f9fc',
          dim: '#d8dadd',
          bright: '#f7f9fc',
          lowest: '#ffffff',
          low: '#f2f4f7',
          container: '#eceef1',
          high: '#e6e8eb',
          highest: '#e0e3e6',
          variant: '#e0e3e6',
          tint: '#3a5f94',
          glass: 'rgba(255, 255, 255, 0.7)'
        },
        'on-surface': {
          DEFAULT: '#191c1e',
          variant: '#43474f'
        },
        'inverse-surface': {
          DEFAULT: '#2d3133',
          on: '#eff1f4'
        },
        outline: {
          DEFAULT: '#737780',
          variant: '#c3c6d1'
        },
        primary: {
          DEFAULT: '#001e40',
          container: '#003366',
          fixed: '#d5e3ff',
          'fixed-dim': '#a7c8ff'
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#799dd6',
          fixed: '#f0f5fbff',
          'fixed-variant': '#1f477b'
        },
        'inverse-primary': '#a7c8ff',
        secondary: {
          DEFAULT: '#795900',
          container: '#ffbf00',
          fixed: '#ffdfa0',
          'fixed-dim': '#fbbc00'
        },
        'on-secondary': {
          DEFAULT: '#ffffff',
          container: '#6d5000',
          fixed: '#261a00',
          'fixed-variant': '#5c4300'
        },
        tertiary: {
          DEFAULT: '#381300',
          container: '#592300',
          fixed: '#ffdbca',
          'fixed-dim': '#ffb690'
        },
        'on-tertiary': {
          DEFAULT: '#ffffff',
          container: '#d8885c',
          fixed: '#341100',
          'fixed-variant': '#723610'
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6'
        },
        'on-error': {
          DEFAULT: '#ffffff',
          container: '#93000a'
        },
        background: '#f7f9fc',
        'on-background': '#191c1e',
        'slate-text': '#334155',
        'shadow-light': '#FFFFFF',
        'shadow-dark': '#D1D9E6',
        
        navy: {
          DEFAULT: '#eff2f5ff', // Deep Academic Navy foundation
          900: '#eaeef2ff',
          800: '#d6d9ddff',
          700: '#1f477b',
          600: '#3a5f94'
        },
        amber: {
          DEFAULT: '#FFBF00', // Amber Gold primary accent
          500: '#FFBF00',
          600: '#fbbc00'
        },
        slate: {
          text: '#334155', // Crisp Slate for body copy
          surface: '#F7F9FC' // Surface Light background
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(0, 0, 0, 0.08)'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
  },
  plugins: [],
}
