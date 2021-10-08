<script setup lang="ts">
const props = defineProps<{
  image: string
  alt: string
}>()
</script>

<template>
  <div>
    <div class="relative w-55 h-55 xs:(w-60) sm:(w-70) lg:(w-100) xl:(w-110) 2xl:(w-120)">
      <img class="w-full" :src="props.image" :alt="props.alt" />
    </div>
  </div>
</template>

<style>
</style>
