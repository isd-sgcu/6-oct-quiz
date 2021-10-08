<script setup lang="ts">
import { CharacterKeyOption } from '~/types'

const { width } = useWindowSize()

const props = defineProps<{
  fullName: string
  detail: string
  url: string
  image: string
  characterKey: CharacterKeyOption
  credit: string
  creditLink: string
}>()
const computedName = computed(() => {
  return width.value < 1024 ? props.fullName.replace(' ', '\n') : props.fullName
})
</script>

<template>
  <div
    class="relative pt-20 lg:(flex pt-0 h-content items-start justify-center w-4xl mx-auto gap-2 pt-20) xl:(w-5xl) 2xl:(gap-10 w-6xl)"
  >
    <ResultPicture :image="props.image" :alt="fullName" class="absolute r-result-picture" />
    <div class="r-result-layout">
      <ResultTextGroup
        :result-full-name="computedName"
        :result-detail="props.detail"
        :credit="props.credit"
        :credit-link="props.creditLink"
        class="pt-60 lg:(pt-0)"
      />
      <ResultIconGroup :character-key="props.characterKey" class="mt-8" />
      <ResultButtonGroup :url="url" class="mt-10" />
    </div>
  </div>
</template>

<style>
.r-result-picture {
  @apply pt-20 top-4 right-3 xs:(right-10) sm:(top-2 right-12) lg:(!static pt-0) xl:() 2xl:();
}
.r-result-layout {
  @apply mx-5 xs:(mx-8) sm:() md:() lg:(mx-0 space-y-8) xl:() 2xl:();
}
</style>