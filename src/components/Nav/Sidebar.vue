<script setup lang="ts">
import NavPath from './path.json'

interface IProps {
  isOpen: boolean
  handleClose(): void
}

defineProps<IProps>()
</script>
<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 lg:(hidden) bg-white z-20 transition-all" :class="isOpen ? 'open': 'close'">
    <div class="relative p-10 h-full">
      <mdi-keyboard-backspace class="absolute text-size-[2rem] cursor-pointer" @click="handleClose" />
      <div class="flex justify-center items-center flex-col h-full justify-evenly">
        <router-link v-for="item in NavPath" :key="item.title" :to="item.link">
          <ParagraphText class="mx-3 text-size-[1.5rem]">
            {{ item.title }}
          </ParagraphText>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.open {
  transform: translateX(0%);
}

.close {
  transform: translateX(100%);
}
</style>
