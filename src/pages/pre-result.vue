<template>
  <div class="flex items-center justify-center h-screen w-full flex-col px-8">
    <HeaderText>คุณคือ...</HeaderText>
  </div>
  <svg
    class="fixed right-0 bottom-0 w-[640px] sm:w-[720px] md:w-full xl:-bottom-1/16"
    viewBox="0 0 1152 552"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M267.402 367.692L0 315.385V730H1274V367.692H1148.75L1104.95 331.538L1113.41 323.077L1104.95 310L1084.97 296.923L1047.32 236.154L1055.78 216.923L1067.3 206.923L1001.22 66.1538L958.958 216.923L978.168 228.462V243.077L968.947 259.231L922.843 367.692L886.729 410.769L814.499 387.692V367.692L734.586 340L701.545 367.692L691.556 387.692L633.158 440L564.002 420L514.825 387.692L296.601 340L267.402 367.692Z" fill="#6F482F" fill-opacity="0.9" />
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
        <stop stop-color="#FF9243" />
        <stop offset="0.34375" stop-color="#FFBD59" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang='ts'>
import { useGameStore } from '~/stores/game'

const game = useGameStore()
const router = useRouter()
try {
  const characterkey = game.determineCharacter()
  game.reset()

  setTimeout(() => {
    router.push(`/result/${characterkey}`)
  }, 1500)
}
catch (error) {
  console.log(error.message)
  router.replace('/story')
}
</script>

<route lang="yaml">
meta:
  layout: quiz
</route>
