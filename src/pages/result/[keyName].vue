<script setup lang="ts">
import characters from '~/assets/characters'
import { CharacterKeyOption } from '~/types'

const router = useRouter()
const { width } = useWindowSize()

const props = defineProps<{
  keyName: CharacterKeyOption
}>()

if (!(props.keyName in characters))
  router.replace('/')

const { fullName, detail } = characters[props.keyName]

const computedName = computed(() => {
  return width.value < 1024 ? fullName.replace(' ', '\n') : fullName
})
</script>

<template>
  <div
    class="relative pt-20 lg:(flex pt-0 min-h-screen items-center justify-center w-4xl mx-auto gap-10) xl:(gap-15 w-5xl) 2xl:(gap-20 w-6xl)"
  >
    <ResultPicture class="absolute r-result-picture" />
    <div class="r-result-layout">
      <ResultTextGroup
        :result-full-name="computedName"
        :result-detail="detail"
        class="pt-60 lg:(pt-0)"
      />
      <ResultIconGroup class="mt-8" />
      <ResultButtonGroup class="mt-10" />
    </div>
  </div>
</template>

<style>
.r-result-picture {
  @apply pt-20 top-4 right-3 xs:(right-10) sm:(top-2 right-12) lg:(static pt-0) xl:() 2xl:();
}
.r-result-layout {
  @apply mx-5 xs:(mx-8) sm:() md:() lg:(pt-10 mx-0 space-y-8) xl:() 2xl:();
}
</style>
