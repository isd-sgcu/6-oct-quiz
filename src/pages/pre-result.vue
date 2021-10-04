<template>
  <div class="flex items-center justify-center h-screen w-full flex-col px-8">
    <QuestionText class="text-white">
      คุณคือ...
    </QuestionText>
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

<route lang="yaml">
meta:
  layout: quiz
</route>
