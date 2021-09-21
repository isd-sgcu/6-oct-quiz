<script setup lang="ts">
const props = defineProps<{
  resultFullName: string
  resultDetail: string
}>()
</script>

<template>
  <div>
    <div>
      <HeaderText class="whitespace-pre text-2rem sm:(text-2.3rem) lg:(text-5xl)">
        <h1>{{ props.resultFullName }}</h1>
      </HeaderText>
      <ParagraphText class="mt-3 font-light sm:(text-1.1rem leading-8) lg:(text-xl leading-8 mt-10)">
        <p>{{ props.resultDetail }}</p>
      </ParagraphText>
    </div>
  </div>
</template>

<style>

</style>
