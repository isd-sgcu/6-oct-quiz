<template>
  <div class="flex items-center justify-center h-screen w-full flex-col px-8">
    <HeaderText>คุณคือ...</HeaderText>
    <div class="absolute bottom-0 w-full overflow-hidden">
      <!--SVG IMAGE--->
      <div class="temple" />
    </div>
  </div>
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

<style>
.temple {
  @apply w-full h-[400px] md:h-[500px];
  background: url('../assets/building.svg') repeat-x right bottom;
}
</style>
<route lang="yaml">
meta:
  layout: quiz
</route>
