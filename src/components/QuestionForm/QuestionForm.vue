<template>
  <div class="question-form">
    <div class="question-part">
      <QuestionText>
        {{ questionText }}
      </QuestionText>
    </div>
    <ButtonList @submit="updateQuestion" />
  </div>
</template>

<script setup lang='ts'>
import { QuestionChoice } from '~/types'

defineProps<{
  questionText: string
}>()

const emit = defineEmits<{
  (e: 'updateQuestion', answer: QuestionChoice): void
}>()

// chain submit event to parent element
const updateQuestion = (answer: QuestionChoice) => {
  emit('updateQuestion', answer)
}
</script>

<style>

.question-part {
  @apply box-border w-full text-center break-words;
}

.question-form {
  @apply min-w-[260px] w-full transform -translate-y-17 md:-translate-y-8;
}
</style>
