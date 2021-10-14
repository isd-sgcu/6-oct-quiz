<script setup lang="ts">
import { CharacterKeyOption } from '~/types'

const { copy, isSupported, copied } = useClipboard()
const { width } = useWindowSize()

const props = defineProps<{
  characterKey: CharacterKeyOption
}>()

const copiedText = 'คัดลอกแล้ว'
const copyIconTitle = computed(
  () => copied.value ? copiedText : 'คัดลอกไปยังคลิปบอร์ด',
)

const clipboardDivClass = computed(
  () => width.value > 386 ? 'flex' : 'relative',
)
const clipboardSpanClass = computed(
  () => width.value > 386 ? 'ml-2' : 'absolute top-7 transform -translate-x-6  w-20',
)

const text = ''
const origin = window.location.origin
const shareLink = `${origin}/share/${props.characterKey}`

const facebook = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}${text ? `&quote=${text.replaceAll(' ', '+')}` : ''}`, '_blank')
}
// const instagram = () => {

// }
const line = () => {
  window.open(`https://social-plugins.line.me/lineit/share?url=${shareLink}`, '_blank')
}
const twitter = () => {
  window.open(`http://twitter.com/share?url=${shareLink}${text ? `&text=${text.replaceAll(' ', '+')}` : ''}`, '_blank')
}
</script>

<template>
  <div>
    <transition name="result-icon-fade" appear>
      <div class="space-x-4 flex items-center">
        <ParagraphText class="text-lg font-semibold text-lg sm:(text-xl leading-8) lg:(text-xl leading-8) xl:() 2xl:(text-2xl leading-9)">
          แชร์ผลลัพธ์:
        </ParagraphText>
        <div title="แชร์บน Facebook">
          <grommet-icons:facebook class="result-icon" @click="facebook" />
        </div>
        <div title="แชร์บน Twitter">
          <grommet-icons:twitter class="result-icon" @click="twitter" />
        </div>
        <div title="แชร์บน LINE">
          <bi:line class="result-icon" @click="line" />
        </div>
        <div v-show="isSupported" :title="copyIconTitle" :class="clipboardDivClass">
          <ant-design:copy-filled class="result-icon" @click="copy(shareLink)" />
          <span v-show="copied" :class="clipboardSpanClass">
            {{ copiedText }}
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.result-icon {
  @apply rounded-5px w-6 h-6 object-center overflow-hidden cursor-pointer lg:(h-7 w-7);
}

.result-icon-fade-enter-active {
  transition: all 0.5s ease-out;
  transition-delay: 1.6s;
}
.result-icon-fade-enter-from {
  opacity: 0;
}
</style>
