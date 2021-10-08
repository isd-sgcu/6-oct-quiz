<script setup lang="ts">
const props = defineProps<{
  image: string
  alt: string
}>()
</script>

<template>
  <div>
    <div class="relative w-55 h-55 xs:(w-60 h-60) sm:(w-70 h-70) lg:(w-100 h-100) 2xl:(w-120 h-120)">
      <div
        class=" rounded-full z-2 overflow-hidden"
      >
        <img class="h-full object-center object-cover" :src="props.image" :alt="props.alt" />
      </div>
    </div>
  </div>
</template>

<style>
.ellipses-common {
  @apply absolute h-full;
}
</style>
