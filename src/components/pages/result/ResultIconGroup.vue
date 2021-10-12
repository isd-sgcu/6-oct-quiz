<script setup lang="ts">
import { CharacterKeyOption } from '~/types'

const props = defineProps<{
  characterKey: CharacterKeyOption
}>()

const text = 'This is the caption of the post.'
const base = 'https://oct-quiz--dev-pn4kl455.web.app/'
const shareLink = `${base}/share/${props.characterKey}`

const facebook = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}&quote=${text.replaceAll(' ', '+')}`, '_blank')
}
// const instagram = () => {

// }
const line = () => {
  window.open(`https://social-plugins.line.me/lineit/share?url=${shareLink}`, '_blank')
}
const twitter = () => {
  window.open(`http://twitter.com/share?text=${text.replaceAll(' ', '+')}&url=${shareLink}`, '_blank')
}
</script>

<template>
  <div class="space-x-4 flex items-center">
    <ParagraphText class="text-lg font-semibold text-lg sm:(text-xl leading-8) lg:(text-xl leading-8) xl:() 2xl:(text-2xl leading-9)">
      แชร์ผลลัพธ์:
    </ParagraphText>
    <grommet-icons:facebook class="result-icon" @click="facebook" />
    <!-- <grommet-icons:instagram class="result-icon" @click="instagram" /> -->
    <grommet-icons:twitter class="result-icon" @click="twitter" />
    <bi:line class="result-icon" @click="line" />
  </div>
</template>

<style>
.result-icon {
  @apply rounded-5px w-6 h-6 object-center overflow-hidden cursor-pointer lg:(h-7 w-7);
}
</style>
