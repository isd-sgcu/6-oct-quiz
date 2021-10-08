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
      <h1 class="font-Prachachon whitespace-pre text-2rem sm:(text-2.3rem) lg:(text-8xl) xl:(text-9xl) 2xl:(text-10xl)">
        {{ props.resultFullName }}
      </h1>
      <ParagraphText class="kjfhsdkfhksjdfhkjshwuef">
        <p v-html="props.resultDetail"></p>
      </ParagraphText>
      <ParagraphText v-show="props.credit" class="kjfhsdkfhksjdfhkjshwuef">
        <br />
        *เนื้อหาดังกล่าวเขียนขึ้นจากการค้นคว้าเอกสารและเรื่องเล่าเท่านั้น<br />
        ที่มาของภาพ: <a :href="props.creditLink" target="_blank" rel="noopener noreferrer" class="underline">{{ props.credit }}</a>
      </ParagraphText>
    </div>
  </div>
</template>

<style>
.kjfhsdkfhksjdfhkjshwuef {
  @apply whitespace-pre-wrap mt-3 font-light sm:(text-1.1rem leading-8) lg:(text-xl leading-8 mt-3) xl:() 2xl:(text-2xl leading-9);
}
</style>
