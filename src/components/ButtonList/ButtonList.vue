<template>
  <div class="button-list">
    <Button button @click="handleClick(1)">
      ใช่ที่สุด
    </Button>
    <Button button @click="handleClick(0)">
      ไม่รู้
    </Button>
    <Button @click="handleClick(2)">
      ไม่ใช่เลย
    </Button>
  </div>
</template>

<script setup lang='ts'>
import { QuestionChoice } from '~/types'

const emit = defineEmits<{
  (e: 'submit', label: QuestionChoice): void
}>()

const disable = ref(false)

const handleClick = (choice: number) => {
  if (!disable.value) {
    switch (choice) {
      case 1:
        emit('submit', QuestionChoice.TotallyYes)
        break
      case 2:
        emit('submit', QuestionChoice.Never)
        break
      default:
        emit('submit', QuestionChoice.NotKnow)
    }
  }
  disable.value = true
}

</script>

<style scoped>
.button-list {
  @apply flex flex-col items-center w-full mt-[36px] font-Trirong
                        md:(flex-row flex-wrap justify-center font-semibold text-[22px]) xl:text-[26px];
}

.button-list Button {
  @apply bg-[#FCFBF5] min-w-32 h-12 mb-4 md:(mb-0 mr-6 min-w-48 h-14) transition hover:(bg-[#F8E39B] transform scale-110);
}

.button-list Button:last-child {
  @apply mb-0 mr-0;
}
</style>
