<template>
  <div class="flex items-center justify-center h-screen w-full flex-col px-8">
    <QuestionText class="wave">
      <span v-for="(letter, index) in text" :key="index" :style="{'--c':(index + 1) + ''}">
        {{ letter }}
      </span>
    </QuestionText>
  </div>
</template>

<script setup lang='ts'>
import { useGameStore } from '~/stores/game'

const game = useGameStore()
const router = useRouter()

const text = ['คุ', 'ณ', 'คื', 'อ', ' ', '.', '.', '.']
try {
  const characterkey = game.determineCharacter()
  import(`/characters/${characterkey}.png`)
  setTimeout(() => {
    game.reset()
    router.push(`/result/${characterkey}`)
  }, 3200)
}
catch (error) {
  console.log(error.message)
  router.replace('/story')
}
</script>

<style>
.wave{
  @apply relative z-20;
}
.wave span{
  @apply relative inline-block transform font-Trirong font-bold font-10 tracking-wide -translate-y-[40px];
  animation:animate 1.5s ease-in-out infinite;
  animation-delay: calc(.1s * var(--c));
}

@keyframes animate{
  0%,100%{
    transform: translateY(-40px);
  }
  20%{
    transform: translateY(-60px);
  }
  40%{
    transform: translateY(-40px);
  }
}
</style>

<route lang="yaml">
meta:
  layout: quiz
</route>
