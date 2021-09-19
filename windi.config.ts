import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [],

  theme: {
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
    },
    backgroundImage: {
      // e.g. bg-grad-1
      'grad-1': 'linear-gradient(180deg, #FFA751 0%, #FFE259 34.38%, #FFFFFF 100%)',
      'grad-2': 'linear-gradient(180deg, #FFA043 0%, #FFD159 34.38%, #FFFFFF 100%)',
      'grad-3': 'linear-gradient(180deg, #FF9243 0%, #FFBD59 34.38%, #FFFFFF 100%)',
      'grad-4': 'linear-gradient(180deg, #FE8228 0%, #FFBD59 52.4%, #FFFFFF 100%)',
      'grad-5': 'linear-gradient(180deg, #FE7528 0%, #FFB359 65.42%, #FFE872 100%)',
      'grad-6': 'linear-gradient(180deg, #FE5B28 10.73%, #FFB359 79.48%, #FFE872 100%)',
      'grad-7': 'linear-gradient(180deg, #C95632 10.73%, #FFBD59 79.48%, #FFE872 100%)',
      'grad-8': 'linear-gradient(180deg, #844B2C 10.73%, #FFBD59 79.48%, #FFE872 100%)',
      'grad-9': 'linear-gradient(180deg, #524E3A 10.73%, #E1D078 100%)',
      'grad-10': 'linear-gradient(180deg, #2E413D 0%, #CBCAA5 100%)',
    },
    extend: {
    },
  },
})
