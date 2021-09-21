<script setup lang="ts">
const props = defineProps<{
  resultFullName: string
  resultDetail: string
}>()
</script>

<template>
  <div>
    <HeaderText class="whitespace-pre text-2rem sm:(text-2.3rem)">
      <h1>{{ props.resultFullName }}</h1>
    </HeaderText>
    <ParagraphText class="mt-3 sm:(text-1.1rem leading-7)">
      <p>{{ props.resultDetail }}</p>
    </ParagraphText>
  </div>
</template>

<style>

</style>
