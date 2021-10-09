<script setup lang="ts">
import appDescription from '~/assets/description'
import { setMetadata } from '~/utils'
setMetadata({
  description: appDescription,
})
</script>

<template>
  <div class="flex pt-5 justify-center items-center h-full flex-col">
    <div class="z-10 m-10 flex items-center flex-wrap">
      <HeaderText class="font-Prachachon topic">
        คุณคือใครในเหตุการณ์เดือน
        <div class="red-circle">
          <HeaderText class="font-Prachachon p-5">
            ตุลาฯ
          </HeaderText>
        </div>
      </HeaderText>
    </div>
    <div class="z-10 flex flex-col items-center w-full px-10">
      <Button class="w-full max-w-[400px] p-6 !py-4 mt-5 bg-white hover:bg-cream transition-colors" @click="$router.push('/intro')">
        <ParagraphText class="text-size-[1.5rem] font-bold">
          Start
        </ParagraphText>
      </Button>
    </div>
  </div>
</template>

<style scoped>

.topic {
  @apply z-0 text-size-[4.8rem] <md:text-size-[3rem] text-white;
  display: inline-block;
}

.red-circle {
  @apply text-size-[4.8rem] <md:text-size-[3rem] ;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 50%;
  background-color: #EC371F;
}

.red-circle::before {
  content:'';
  float: left;
  width: auto;
  padding-bottom: 100%;
}

.text-input {
  @apply text-size-[1.25rem] <md:text-size-[1rem] text-center;
}
</style>

<route lang="yaml">
meta:
  layout: landing
</route>
