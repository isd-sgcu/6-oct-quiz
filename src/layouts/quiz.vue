<template>
  <main
    class="absolute min-h-screen w-full overflow-hidden z-10"
  >
    <router-view />
  </main>
  <transition-group name="fade">
    <div :key="'background' + qNumber" class="absolute min-h-screen w-full" :class="'bg-grad-' + qNumber"></div>
    <svg
      :key="'building' + qNumber"
      class="building"
      viewBox="0 0 1152 552"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M267.402 367.692L0 315.385V730H1274V367.692H1148.75L1104.95 331.538L1113.41 323.077L1104.95 310L1084.97 296.923L1047.32 236.154L1055.78 216.923L1067.3 206.923L1001.22 66.1538L958.958 216.923L978.168 228.462V243.077L968.947 259.231L922.843 367.692L886.729 410.769L814.499 387.692V367.692L734.586 340L701.545 367.692L691.556 387.692L633.158 440L564.002 420L514.825 387.692L296.601 340L267.402 367.692Z" :fill="buildingColor[qNumber - 1].main" fill-opacity="0.9" />
      <path d="M78.5 497L76.5 551V559.5H535.5V548H513V551H469.5L469 542.5H457.5H443V551H394.5V534.5L363.5 532V551H312.5V525.5L280 521.5V551H221V513.5L183 510.5V551H119.5V501.5L78.5 497Z" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="306"
          y1="497"
          x2="306"
          y2="559.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop :stop-color="buildingColor[qNumber - 1].gradientTop" />
          <stop offset="1" :stop-color="buildingColor[qNumber - 1].gradientBottom" />
        </linearGradient>
      </defs>
    </svg>
  </transition-group>
</template>

<script setup lang="ts">
import { useGameStore } from '~/stores/game'

const gameStore = useGameStore()

const qNumber = computed(() => gameStore.currentIndex + 1)

// style object
const buildingColor = [
  { // 1
    main: '#835131',
    gradientTop: '#FF9243',
    gradientBottom: 'white',
  },
  { // 2
    main: '#784C30',
    gradientTop: '#FF9243',
    gradientBottom: 'white',
  },
  { // 3
    main: '#6F482F',
    gradientTop: '#FF9243',
    gradientBottom: 'white',
  },
  { // 4
    main: '#67442D',
    gradientTop: '#FE8228',
    gradientBottom: 'white',
  },
  { // 5
    main: '#5E3F2B',
    gradientTop: '#FE7528',
    gradientBottom: '#FFE872',
  },
  { // 6
    main: '#563B29',
    gradientTop: '#FE5B28',
    gradientBottom: '#FFE872',
  },
  { // 7
    main: '#4E3627',
    gradientTop: '#C95632',
    gradientBottom: '#FFE872',
  },
  { // 8
    main: '#463225',
    gradientTop: '#844B2C',
    gradientBottom: '#FFE872',
  },
  { // 9
    main: '#3F2D22',
    gradientTop: '#524E3A',
    gradientBottom: '#E1D078',
  },
  { // 10
    main: '#372920',
    gradientTop: '#2E413D',
    gradientBottom: '#CBCAA5',
  },
]
</script>

<style>
.building {
  @apply fixed right-0 bottom-0 w-[640px] xs:w-[768px] md:w-full xl:(-bottom-1/16);
}

.fade-enter-active {
  transition: all 1.75s ease;
}
.fade-leave-active {
  transition: all 1s ease-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
