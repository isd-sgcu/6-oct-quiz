<script setup lang="ts">
// const props = defineProps<{
//   imgSrc: string
//   imgAlt: string
// }>()

const dumbImg = 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/08/08/Pictures/_6bda0940-b9ad-11e9-98cb-e738ad509720.jpg'
</script>

<template>
  <div>
    <div class="w-55 h-55 xs:(w-60 h-60) sm:(w-70 h-70) relative">
      <div
        class="ellipses-common rounded-full z-2 overflow-hidden"
      >
        <img class="h-full object-center object-cover" :src="dumbImg" :alt="''" />
      </div>
      <img
        class="ellipses-common transform -translate-x-1.5 translate-y-1.5"
        src="/ellipses/mobile/yellow.svg"
      />
      <img
        class="ellipses-common transform translate-x-1.5 -translate-y-1.5"
        src="/ellipses/mobile/red.svg"
      />
    </div>
  </div>
</template>

<style>
.ellipses-common {
  @apply absolute h-full;
}
</style>
