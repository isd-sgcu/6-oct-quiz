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
    <ParagraphText class="text-lg font-semibold lg:(text-2xl)">
      แชร์ผลลัพธ์:
    </ParagraphText>
    <grommet-icons:facebook class="result-icon" color="#4267B2" @click="facebook" />
    <!-- <grommet-icons:instagram class="result-icon" @click="instagram" /> -->
    <bi:line class="result-icon" color="#00B900" @click="line" />
    <grommet-icons:twitter class="result-icon" color="#1DA1F2" @click="twitter" />
  </div>
</template>

<style>
.result-icon {
  @apply rounded-5px w-4 h-4 object-center overflow-hidden cursor-pointer lg:(h-7 w-7);
}
</style>
