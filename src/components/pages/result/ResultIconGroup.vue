<script setup lang="ts">
const icon1OnClick = () => {

}
const icon2OnClick = () => {

}
const icon3OnClick = () => {

}

const shareIcon1Src = 'https://pbs.twimg.com/profile_images/1180519637328502784/EbolKHV8_400x400.png'
const shareIcon2Src = 'https://img.wongnai.com/p/256x256/2015/06/11/5489a807f7e44d7992c4641601402882.jpg'
const shareIcon3Src = 'https://pbs.twimg.com/profile_images/1350525503740862465/04a5AOWU.jpg'
</script>

<template>
  <div class="space-x-4 flex items-center">
    <ParagraphText class="text-lg font-semibold">
      แชร์:
    </ParagraphText>
    <RoundedIcon :img-src="shareIcon1Src" :img-alt="'cat 1'" @click="icon1OnClick" />
    <RoundedIcon :img-src="shareIcon2Src" :img-alt="'cat 2'" @click="icon2OnClick" />
    <RoundedIcon :img-src="shareIcon3Src" :img-alt="'cat 3'" @click="icon3OnClick" />
  </div>
</template>

<style>

</style>
