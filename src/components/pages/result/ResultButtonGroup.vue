<script setup lang="ts">
const replay = () => {

}
const knowMore = () => {

}
</script>

<template>
  <div class="flex justify-evenly pb-11 sm:(justify-start gap-6) lg:(pb-0)">
    <Button class="result-button" @click="replay">
      <ParagraphText class="result-button-text">
        เล่นอีกรอบ
      </ParagraphText>
    </Button>
    <Button class="result-button" @click="knowMore">
      <ParagraphText class="result-button-text">
        รู้จักเขาให้มากขึ้น
      </ParagraphText>
    </Button>
  </div>
</template>

<style>
.result-button {
  @apply w-30 lg:(w-42 h-15);
}
.result-button-text {
  @apply text-sm font-medium lg:(text-xl);
}
</style>
