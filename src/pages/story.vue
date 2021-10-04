<template>
  <div class="flex items-center justify-center h-screen w-full flex-col-reverse px-8">
    <!--trigger transtion when the props are change--->
    <transition name="slide-fade" mode="out-in">
      <QuestionForm
        :key="qNumber"
        :question-text="currentQuestion ? currentQuestion.text : ''"
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
import { setMetadata } from '~/utils'

setMetadata({
  title: 'คือคุณใครใน 6 ตุลาฯ',
  description: 'เลือกคำตอบที่คิดว่าตรงกับคุณที่สุด',
})

const game = useGameStore()
const router = useRouter()

game.initNewQuiz() // reset game state

// Speciftic the order of a question and set currentQuestion
const qNumber = computed(() => game.currentIndex + 1)
const currentQuestion = computed(() => {
  const question = game.questionList
  return question ? question[game.currentIndex] : undefined
})

/**
 * @callback Calculate new score according to a player's answer and set the next question
 * if all of the questions are answer set route to /pre-result
 * @var answer get from custom event of QuestionForm component
 */
const updateQuestion = (answer: QuestionChoice) => {
  if (game.finish || !currentQuestion.value) return

  // get a set of characters that related to the question
  const relatedPeople = currentQuestion.value.relatedPeople
  for (let i = 0; i < relatedPeople.length; i++) {
    const character = relatedPeople[i]
    if (answer === QuestionChoice.TotallyYes) {
    // if player answer yes, add score ty each person by 2
      game.updateScore(character, 2)
    }
    else if (answer === QuestionChoice.Never) {
    // if player answer no, subtract score from each person by 2
      game.updateScore(character, -2)
    }
  }

  if (answer === QuestionChoice.Never) {
    // if player answer not know, add score to anonymous by 1
    game.updateScore('empty', 1)
  }

  game.nextQuestion()
  // quiz is end go to the next route
  if (game.gameState === 'End')
    router.push('pre-result')
}
</script>

<style>
.building {
  @apply h-[274px] md:h-[300px] w-full;
  background: url('../assets/city_brown.svg') repeat-x center;
}

/* durations and timing functions.*/
.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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
