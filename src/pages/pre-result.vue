<template>
  <div class="flex items-center justify-center h-screen w-full flex-col px-8">
    <HeaderText>คุณคือ...</HeaderText>
    <div class="absolute bottom-0 w-full overflow-hidden">
      <!--SVG IMAGE--->
      <div class="building" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useGameStore } from '~/stores/game'

const game = useGameStore()
const router = useRouter()

setTimeout(() => {
  // second call return a result, don't calculate
  const characterkey = game.determineCharacter()
  router.push(`result/${characterkey}`)
}, 1500)
game.determineCharacter() // first call calcalute a result

</script>

<style>
.building {
  @apply w-full h-[400px] md:h-[500px];
  background: url('../assets/temple.svg') repeat-x right bottom;
}
</style>
<route lang="yaml">
meta:
  layout: quiz
</route>
