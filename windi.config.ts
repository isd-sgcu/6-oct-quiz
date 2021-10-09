import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'bg-grad-1 bg-grad-2 bg-grad-3 bg-grad-4 bg-grad-5 bg-grad-6 bg-grad-7 bg-grad-8 bg-grad-9 bg-grad-10',
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [],

  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      black: {
        DEFAULT: '#020202',
      },
      cream: {
        DEFAULT: '#E2D195',
      },
      red: {
        DEFAULT: '#EC371F',
        750: '#8C1B0C',
      },
      yellow: {
        DEFAULT: '#FFAE11',
      },
      purple: {
        DEFAULT: '#9F79B7',
      },
      cre: {
        DEFAULT: '#F8E39B',
      },
      white: {
        DEFAULT: '#FCFBF5',
      },
      darkBrown: {
        DEFAULT: '#784C30',

      },
    },
    backgroundImage: {
      // e.g. bg-grad-1
      'grad-1': '#FFF',
      'grad-2': 'linear-gradient(180deg, #F5F5F5 0%, #FFF8F3 100%)',
      'grad-3': 'linear-gradient(180deg, #EBEBEB 0%, #FCEDE3 100%)',
      'grad-4': 'linear-gradient(180deg, #E4DFDF 0%, #F7E2D3 100%)',
      'grad-5': 'linear-gradient(180deg, #CDC6C6 0%, #FBE0CC 83.12%, #FFD7D2 100%)',
      'grad-6': 'linear-gradient(180deg, #BCB1B1 0%, #F4D6C0 83.12%, #EFC6C1 100%)',
      'grad-7': 'linear-gradient(180deg, #A89D9D 0%, #F4D6C0 74.27%, #E7B6AF 100%)',
      'grad-8': 'linear-gradient(180deg, #978686 0%, #EBC4A9 66.98%, #DE9C93 100%)',
      'grad-9': 'linear-gradient(180deg, #786767 0%, #EBC4A9 66.98%, #CC8076 100%)',
      'grad-10': 'linear-gradient(180deg, #57463B 0%, #E6B695 66.98%, #A4392B 100%)',
    },
    extend: {
      fontFamily: {
        Chonburi: ['Chonburi', 'cursive'],
        Trirong: ['Trirong', 'serif'],
      },
    },
  },
})
