<script setup lang="ts">
const props = defineProps<{
  imgSrc: string
  imgAlt: string
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <div class="rounded-10px w-8 h-8 bg-light-800 object-center overflow-hidden cursor-pointer" @click="$emit('click')">
    <img :src="props.imgSrc" :alt="props.imgAlt" />
  </div>
</template>

<style>
</style>
