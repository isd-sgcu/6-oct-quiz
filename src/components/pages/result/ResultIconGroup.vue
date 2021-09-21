<script setup lang="ts">
const icon1OnClick = () => {

}
const icon2OnClick = () => {

}
const icon3OnClick = () => {

}

const shareIcon1Src = 'https://thumbs.gfycat.com/EmptyPleasedHorseshoecrab-small.gif'
const shareIcon2Src = 'https://c.tenor.com/0Mg3R5jZUnQAAAAd/thanos-dance.gif'
const shareIcon3Src = 'https://thumbs.gfycat.com/BelatedGentleHusky-size_restricted.gif'
</script>

<template>
  <div class="space-x-4 flex items-center">
    <ParagraphText class="text-lg font-semibold lg:(text-2xl)">
      แชร์:
    </ParagraphText>
    <RoundedIcon :img-src="shareIcon1Src" :img-alt="'cat 1'" @click="icon1OnClick" />
    <RoundedIcon :img-src="shareIcon2Src" :img-alt="'cat 2'" @click="icon2OnClick" />
    <RoundedIcon :img-src="shareIcon3Src" :img-alt="'cat 3'" @click="icon3OnClick" />
  </div>
</template>

<style>

</style>
