/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B35',
          orangeLight: '#FF8C5A',
          orangePale: '#FFF0EB',
          green: '#4CAF50',
          greenLight: '#81C784',
          greenPale: '#F0F9F0',
          yellow: '#FFD600',
          yellowPale: '#FFFDE7',
          sky: '#29B6F6',
          skyPale: '#E1F5FE',
        },
        dark: {
          bg: '#0D1117',
          card: '#161B22',
          border: '#30363D',
          text: '#E6EDF3',
          muted: '#8B949E',
        }
      },
      fontFamily: {
        display: ['"Fredoka One"', 'cursive'],
        heading: ['"Nunito"', 'sans-serif'],
        body: ['"Nunito"', 'sans-serif'],
      },
      borderRadius: {
        blob: '60% 40% 70% 30% / 50% 60% 40% 50%',
        blob2: '40% 60% 30% 70% / 60% 40% 70% 30%',
        blob3: '70% 30% 50% 50% / 30% 70% 60% 40%',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float2': 'float 7s ease-in-out infinite reverse',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      }
    },
  },
  plugins: [],
}
