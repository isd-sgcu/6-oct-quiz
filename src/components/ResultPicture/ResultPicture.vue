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
        class="ellipses-common rounded-full z-2 overflow-hidden"
      >
        <img class="h-full object-center object-cover" :src="props.image" :alt="props.alt" />
      </div>
      <img
        class="ellipses-common transform -translate-x-1.5 translate-y-1.5 lg:(-translate-x-8 translate-y-10)"
        src="/ellipses/yellow.svg"
      />
      <img
        class="ellipses-common transform translate-x-1.5 -translate-y-1.5 lg:(translate-x-2 -translate-y-2)"
        src="/ellipses/red.svg"
      />
    </div>
  </div>
</template>

<style>
.ellipses-common {
  @apply absolute h-full;
}
</style>
