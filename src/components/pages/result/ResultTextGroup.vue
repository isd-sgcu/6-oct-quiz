<script setup lang="ts">
const props = defineProps<{
  resultFullName: string
  resultDetail: string
  credit: string
  creditLink: string
}>()
</script>

<template>
  <div>
    <div>
      <HeaderText class="whitespace-pre text-2rem sm:(text-2.3rem) lg:(text-5xl) xl:(text-6xl) 2xl:(text-7xl)">
        <h1>{{ props.resultFullName }}</h1>
      </HeaderText>
      <ParagraphText class="kjfhsdkfhksjdfhkjshwuef">
        <p>{{ props.resultDetail }}</p>
      </ParagraphText>
      <ParagraphText v-show="props.credit" class="kjfhsdkfhksjdfhkjshwuef">
        ที่มาของภาพ: <a :href="props.creditLink" target="_blank" rel="noopener noreferrer" class="underline">{{ props.credit }}</a>
      </ParagraphText>
    </div>
  </div>
</template>

<style>
.kjfhsdkfhksjdfhkjshwuef {
  @apply mt-3 font-light sm:(text-1.1rem leading-8) lg:(text-xl leading-8 mt-10) xl:() 2xl:(text-2xl leading-9);
}
</style>
