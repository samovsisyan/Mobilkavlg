import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // add this
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#111827',
        primary: '#1E40AF',
        yellow: '#F4CD1C',
        gray3: '#DEDEDE',
        gray1: '#6B7280',
        lightBlue: '#E9ECF7',
        blueActive: '#041A61',
        blueHover: '#132C7E',
        blueDark: '#112F93',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      Parsing ecmascript source code failed

./MOBILKAVLG/next-tw-app/tailwind.config.ts (65:7)

Parsing ecmascript source code failed
  63 |     },
  64 |     layoutCenterWrap: {
> 65 |       @apply flex flex-col flex-wrap justify-center w-full mx-auto gap-8 pt-9;
     |       ^
  66 |     },
  67 |   },
  68 |   plugins: [],

Unexpected token `@`. Expected identifier, string literal, numeric literal or [ for the computed key
      fontSize: {
        '12': ['12px', { lineHeight: '16px' }],
        '14': ['14px', { lineHeight: '20px' }],
        '16': ['16px', { lineHeight: '24px' }],
        '18': ['18px', { lineHeight: '28px' }],
        '20': ['20px', { lineHeight: '28px' }],
        '24': ['24px', { lineHeight: '32px' }],
        '36': ['36px', { lineHeight: '40px' }],
        '60': ['60px', { lineHeight: '72px' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        '2': '0px 5px 12px rgba(0, 0, 0, 0.1)',
        '5': '0px 34px 26px rgba(13, 10, 44, 0.05), 0px 12px 34px rgba(13, 10, 44, 0.08)',
      },
      borderRadius: {
        '6': '6px',
        '8': '8px',
        full: '9999px',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
        'gradient-custom': 'linear-gradient(115.09deg, #112F93 18.91%, rgba(30, 64, 175, 0) 83.69%)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

export default config;
