<script setup lang="ts">
const props = defineProps<{
  resultFullName: string
  resultDetail: string
}>()
</script>

<template>
  <div>
    <HeaderText class="text-2rem whitespace-pre">
      <h1>{{ props.resultFullName }}</h1>
    </HeaderText>
    <ParagraphText class="mt-3">
      <p>{{ props.resultDetail }}</p>
    </ParagraphText>
  </div>
</template>

<style>

</style>
