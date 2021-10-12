<script setup lang="ts">
const props = defineProps<{
  image: string
  alt: string
}>()

const { width } = useWindowSize()

const isLoaded = ref(false)

const spinnerSize = computed(() => {
  const getSpinnerSize = (width: number) => {
    if (width < 480)
      return 7
    if (width < 640)
      return 8
    if (width < 768)
      return 9
    if (width < 1024)
      return 11
    if (width < 1280)
      return 12
    if (width < 1536)
      return 14
    return 16
  }
  return `${getSpinnerSize(width.value)}px`
})

const show = () => {
  isLoaded.value = true
}
</script>

<template>
  <div>
    <div class="mx-auto w-[80%] py-10 xs:(w-[70%]) sm:(w-100) lg:(w-90 py-0) xl:(w-110) 2xl:(w-120)">
      <pulse-loader :loading="!isLoaded" color="grey" :size="spinnerSize" class="flex justify-center my-36 xs:my-51 sm:my-57 lg:mt-60" />
      <transition name="result-image-fade">
        <img v-show="isLoaded" class="w-full" :src="props.image" :alt="props.alt" @load="show" />
      </transition>
    </div>
  </div>
</template>

<style>
.result-image-fade-enter-active {
  transition: all 0.5s ease-out;
}
.result-image-fade-enter-from {
  opacity: 0;
}
</style>
