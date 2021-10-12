<script setup lang="ts">
const props = defineProps<{
  image: string
  alt: string
}>()

const isLoaded = ref(false)

const show = () => {
  isLoaded.value = true
}
</script>

<template>
  <div>
    <div class="mx-auto w-[80%] py-10 xs:(w-[70%]) sm:(w-100) lg:(w-90 py-0) xl:(w-110) 2xl:(w-120)">
      <div v-show="!isLoaded" class="w-full h-full bg-red">f</div>
      <img v-show="isLoaded" class="w-full" :src="props.image" :alt="props.alt" @load="show" />
    </div>
  </div>
</template>
