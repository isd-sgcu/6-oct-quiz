<template>
  <div class="button-list">
    <Button @click="$emit('submit', QuestionChoice.TotallyYes)">
      ใช่ที่สุด
    </Button>
    <Button @click="$emit('submit', QuestionChoice.NotKnow)">
      ไม่รู้
    </Button>
    <Button @click="$emit('submit', QuestionChoice.Never)">
      ไม่ใช่เลย
    </Button>
  </div>
</template>

<script setup lang='ts'>
import { QuestionChoice } from '~/types'

defineEmits<{
  (e: 'submit', label: QuestionChoice): void
}>()
</script>

<style>
.button-list {
  @apply flex flex-col items-center w-full mt-[36px] font-Trirong
                        md:(flex-row flex-wrap justify-center font-semibold text-[24px]);
}

.button-list Button {
  @apply bg-[#FCFBF5] min-w-32 h-12 mb-4 md:(mb-0 mr-6 min-w-48 h-14);
}

.button-list Button:last-child {
  @apply mb-0 mr-0;
}
</style>
