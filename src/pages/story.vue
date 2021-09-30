<template>
  <div class="flex items-center justify-center h-screen w-full flex-col-reverse px-8">
    <transition name="slide-fade" mode="out-in">
      <QuestionForm
        :key="qNumber"
        :question-text="questionList[qIndex]"
        @update-question="nextQuestion"
      />
    </transition>
    <div class="absolute bottom-0 w-full overflow-hidden">
      <div class="building" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionChoice } from '~/types'

const qIndex = ref(0)
const questionList = [
  'คุณเป็นนิสิตที่พร้อมรับกับการเปลี่ยนแปลงใหม่ ๆ อยู่เสมอ',
  'คุณชอบทํากิจกรรมต่าง ๆ มากกว่าการเรียน และคุณไม่ค่อยสนใจผลการเรียนตัวเองเท่าไร',
  'คุณเป็นคนเห็นอกเห็นใจผู้อื่น และมักนึกถึงผู้อื่นก่อนตัวเอง',
  'คุณเหนื่อยและหมดกําลังใจง่าย',
  'คุณเป็นคนที่เมื่อได้เห็นคนอื่นทุกข์ใจจะทําให้คุณทุกข์ใจตาม',
  'คุณกล้าจะยอมรับตัวตนของตัวเอง',
  'คุณไม่ค่อยสนใจการเมืองเท่าไร',
  'คุณสับสนกับตัวเองบ่อยครั้ง ไม่แน่ใจในความคิดตัวเองอยู่เสมอ',
  'คุณชื่นชอบความเสี่ยง และยินดีรับความท้าทายใหม่ ๆ',
  'คุณคิดว่าการเป็นผู้นําเป็นอะไรที่รับมือได้ง่าย',
]

const nextQuestion = (answer: QuestionChoice) => {
  if (qIndex.value < 9)
    qIndex.value += 1
}

const qNumber = computed(() => (qIndex.value + 1))
</script>

<style>
.building {
  @apply h-[274px] md:h-[300px] w-full;
  background: url('../assets/city_brown.svg') repeat-x center;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from, .slide-fade-leave-to {
/* .slide-fade-leave-active below version 2.1.8 */
  transform: translateY(10px);
  opacity: 0;
}
</style>

<route lang="yaml">
meta:
  layout: quiz
</route>
