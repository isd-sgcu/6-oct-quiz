<template>
  <div class="flex items-center justify-center h-screen w-full flex-col-reverse px-8">
    <!--trigger transtion when the props are change--->
    <transition name="slide-fade" mode="out-in">
      <QuestionForm
        :key="qNumber"
        :question-text="currentQuestion.text"
        @update-question="updateQuestion"
      />
    </transition>
    <div class="absolute bottom-0 w-full overflow-hidden">
      <!--SVG IMAGE--->
      <div class="building" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionChoice } from '~/types'
import { useGameStore } from '~/stores/game'

const gameStore = useGameStore()
gameStore.initNewQuiz()

// Speciftic the order of a question
const qNumber = computed(() => gameStore.currentIndex + 1)
const currentQuestion = computed(() => gameStore.questionList[gameStore.currentIndex])

const updateQuestion = (answer: QuestionChoice) => {
  if (gameStore.finish) return

  const relatedPersons = currentQuestion.value.relatedPersons
  if (answer === QuestionChoice.TotallyYes) {
    for (let i = 0; i < relatedPersons.length; i++) {
      const character = relatedPersons[i]
      gameStore.updateScore(character, 2)
    }
  }
  else if (answer === QuestionChoice.Never) {
    for (let i = 0; i < relatedPersons.length; i++) {
      const character = relatedPersons[i]
      gameStore.updateScore(character, -2)
    }
  }
  else {
    gameStore.updateScore('ตัวคุณเอง', 1)
  }
  console.log(gameStore.scoreMap)
  gameStore.nextQuestion()

  if (gameStore.finish)
    console.log(gameStore.determineCharacter())
}
</script>

<style>
.building {
  @apply h-[274px] md:h-[300px] w-full;
  background: url('../assets/city_brown.svg') repeat-x center;
}

/* durations and timing functions.*/
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

/* Set animation state of the element before entering or after leaving */
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>

<route lang="yaml">
meta:
  layout: quiz
</route>
