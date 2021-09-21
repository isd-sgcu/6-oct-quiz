<script setup lang="ts">
const props = defineProps<{
  resultFullName: string
  resultDetail: string
}>()
</script>

<template>
  <div>
    <div class="max-w-5xl">
      <HeaderText class="whitespace-pre text-2rem sm:(text-2.3rem) lg:(text-7xl)">
        <h1>{{ props.resultFullName }}</h1>
      </HeaderText>
      <ParagraphText class="mt-3 font-light sm:(text-1.1rem leading-7) lg:(text-3xl leading-11 mt-10)">
        <p>{{ props.resultDetail }}</p>
      </ParagraphText>
    </div>
  </div>
</template>

<style>

</style>
