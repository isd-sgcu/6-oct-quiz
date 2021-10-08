<script setup lang="ts">
const props = defineProps<{
  image: string
  alt: string
}>()
</script>

<template>
  <div>
    <div class="mx-auto w-65 py-10 xs:(w-85) sm:(w-100) lg:(w-90) xl:(w-110) 2xl:(w-120)">
      <img class="w-full" :src="props.image" :alt="props.alt" />
    </div>
  </div>
</template>

<style>
</style>
