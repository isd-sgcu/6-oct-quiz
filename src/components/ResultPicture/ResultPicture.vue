<script setup lang="ts">
const props = defineProps<{
  imgSrc?: string
}>()

const dumbImg = 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/08/08/Pictures/_6bda0940-b9ad-11e9-98cb-e738ad509720.jpg'
</script>

<template>
  <div>
    <div>
      <div class="w-60 h-60 relative">
        <div
          class="absolute w-full h-full rounded-full z-2 overflow-hidden object-center object-cover"
        >
          <img class="w-full h-full" :src="dumbImg" />
        </div>
        <img
          class="absolute w-full h-full transform -translate-x-2 translate-y-2"
          src="/ellipses/mobile/yellow.svg"
        />
        <img
          class="absolute w-full h-full transform translate-x-2 -translate-y-2"
          src="/ellipses/mobile/red.svg"
        />
      </div>
      <div>
        <!-- for another screen size -->
      </div>
    </div>
  </div>
</template>

<style>
</style>
