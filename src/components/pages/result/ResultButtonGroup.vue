<script setup lang="ts">
const replay = () => {

}
const knowMore = () => {

}
</script>

<template>
  <div class="flex justify-evenly pb-11 sm:(justify-start gap-6)">
    <Button class="w-30" @click="replay">
      <ParagraphText class="result-button-text">
        เล่นอีกรอบ
      </ParagraphText>
    </Button>
    <Button class="w-30" @click="knowMore">
      <ParagraphText class="result-button-text">
        รู้จักเขาให้มากขึ้น
      </ParagraphText>
    </Button>
  </div>
</template>

<style>
.result-button-text {
  @apply text-sm font-medium;
}
</style>
