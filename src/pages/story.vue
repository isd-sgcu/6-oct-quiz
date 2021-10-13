<template>
  <div class="flex items-center justify-center h-screen w-full flex-col-reverse px-8 overflow-hidden z-10">
    <!--trigger transtion when the props are change--->
    <transition name="question-fade" mode="out-in">
      <div v-if="questions" :key="'question' + qNumber" class="question-form">
        <div class="question-part">
          <QuestionText>
            {{ currentQuestion.text }}
          </QuestionText>
        </div>
        <ButtonList @submit="updateQuestion" />
      </div>
    </transition>
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

game.reset()
game.initNewQuiz() // reset game state
const questions = game.questionList
// Speciftic the order of a question and set currentQuestion
const qNumber = computed(() => game.currentIndex + 1)
const currentQuestion = computed(() => questions[game.currentIndex])

/**
 * @callback Calculate new score according to a player's answer and set the next question
 * if all of the questions are answer set route to /pre-result
 * @var answer get from custom event of QuestionForm component
 */
const updateQuestion = (answer: QuestionChoice) => {
  if (!currentQuestion.value) return

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
  if (game.gameState === 'NotInPlay')
    router.push('pre-result')
}
</script>

<style>
.question-form {
  @apply min-w-[260px] w-9/10 max-w-screen-lg transform -translate-y-15 z-20 md:-translate-y-12;
}
.question-part {
  @apply box-border w-full text-center break-words;
}

/* durations and timing functions.*/
.question-fade-enter-active {
  transition: all 0.5s ease-in;
}
.question-fade-leave-active {
  transition: all 0.35s ease-out;
  transition-delay: 0.10s;
}

/* Set animation state of the element before entering or after leaving */
.question-fade-enter-from, .question-fade-leave-to {
  opacity: 0;
}
</style>

<route lang="yaml">
meta:
  layout: quiz
</route>
