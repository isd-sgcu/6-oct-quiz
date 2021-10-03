<script setup lang="ts">
import { CharacterKeyOption } from '~/types'

const props = defineProps<{
  characterKey: CharacterKeyOption
}>()

const text = 'This is the caption of the post.'
const base = 'https://oct-quiz--pr21-metadata-ss2pvu1d.web.app'
const shareLink = `${base}/share/${props.characterKey}`

const facebook = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}&quote=${text.replaceAll(' ', '+')}`, '_blank')
}
const instagram = () => {

}
const twitter = () => {

}
</script>

<template>
  <div class="space-x-4 flex items-center">
    <ParagraphText class="text-lg font-semibold lg:(text-2xl)">
      แชร์:
    </ParagraphText>
    <grommet-icons:facebook class="result-icon" @click="facebook" />
    <grommet-icons:instagram class="result-icon" @click="instagram" />
    <grommet-icons:twitter class="result-icon" @click="twitter" />
  </div>
</template>

<style>
.result-icon {
  @apply rounded-5px w-4 h-4 object-center overflow-hidden cursor-pointer lg:(h-7 w-7);
}
</style>
