<template>
  <div class="button-list">
    <Button button @click.prevent="handleClick(1)">
      ใช่ที่สุด
    </Button>
    <Button button @click.prevent="handleClick(0)">
      ไม่รู้
    </Button>
    <Button @click.prevent="handleClick(2)">
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

<style>
.button-list {
  @apply flex flex-col items-center w-full mt-[36px] md:(flex-row flex-wrap justify-center);
}

.button-list Button {
  @apply bg-[#FCFBF5] w-32 h-12 mb-4 font-Trirong font-medium md:(mb-0 mr-6 w-46 h-14 text-[22px])
          xl:(w-1/5 text-[26px]) transition hover:(bg-[#C8BBB1] transform scale-110);
}

.button-list Button:last-child {
  @apply mb-0 mr-0;
}
</style>
