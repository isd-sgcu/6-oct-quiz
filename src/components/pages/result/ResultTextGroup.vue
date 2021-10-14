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
      <transition name="name-fade" appear>
        <h1 class="font-Prachachon whitespace-pre text-7xl leading-13 sm:(text-5rem leading-15) lg:(text-7xl) xl:(text-8xl) 2xl:(text-9xl)">
          {{ props.resultFullName }}
        </h1>
      </transition>
      <transition name="detail-fade" appear>
        <ParagraphText class="kjfhsdkfhksjdfhkjshwuef">
          <p v-html="props.resultDetail"></p>
        </ParagraphText>
      </transition>
      <transition name="disclaimer-fade" appear>
        <ParagraphText v-show="props.credit" class="kpkpkpkqqqqq">
          <br />
          *เนื้อหาดังกล่าวเขียนขึ้นจากการค้นคว้าเอกสารและเรื่องเล่าเท่านั้น<br />
          <br />
          ที่มาของภาพ: <a :href="props.creditLink" target="_blank" rel="noopener noreferrer" class="underline">{{ props.credit }}</a>
        </ParagraphText>
      </transition>
    </div>
  </div>
</template>

<style>
.kjfhsdkfhksjdfhkjshwuef {
  @apply whitespace-pre-wrap mt-6 font-light text-lg sm:(text-xl leading-8) lg:(mt-3) xl:() 2xl:(text-2xl leading-9);
}
.kpkpkpkqqqqq {
  @apply whitespace-pre-wrap mt-6 font-light text-sm sm:(text-base leading-5) lg:(mt-3) xl:() 2xl:(text-lg leading-6);
}

.name-fade-enter-active,
.detail-fade-enter-active,
.disclaimer-fade-enter-active {
  transition: all 0.7s ease-out;
}
.name-fade-enter-from,
.detail-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.disclaimer-fade-enter-from {
  opacity: 0;
}

.detail-fade-enter-active {
  transition-delay: .5s;
}
.disclaimer-fade-enter-active {
  transition-delay: 1.5s;
}
</style>
