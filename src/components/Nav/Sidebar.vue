<script setup lang="ts">
interface IProps {
  handleClose(): void
}

defineProps<IProps>()
</script>
<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 lg:(hidden) bg-white z-20">
    <div class="relative p-10 h-full">
      <mdi-keyboard-backspace class="absolute text-size-[2rem] cursor-pointer" @click="handleClose" />
      <div class="flex justify-center items-center flex-col h-full justify-evenly">
        <ParagraphText class="mx-3">
          Hello World 1
        </ParagraphText>
        <ParagraphText class="mx-3">
          Hello World 2
        </ParagraphText>
        <ParagraphText class="mx-3">
          Hello World 3
        </ParagraphText>
      </div>
    </div>
  </div>
</template>
