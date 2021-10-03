<script setup lang="ts">
const facebook = () => {

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
