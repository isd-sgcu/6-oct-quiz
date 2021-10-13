<script setup lang="ts">
import appDescription from '~/assets/description'
import { setMetadata } from '~/utils'

setMetadata({
  description: appDescription,
})

onMounted(() => window.scrollTo(0, 1))
</script>

<template>
  <div class="flex pb-20 h-full items-center justify-center">
    <div class="z-10 m-10 flex justify-center items-center flex-wrap">
      <div class="flex flex-col justify-center items-center">
        <div class="w-full">
          <div class="font-Prachachon topic">
            คุณคือใคร
          </div>
        </div>
        <div class="relative md:flex">
          <div class="flex flex-col justify-center md:items-center items-start flex-wrap">
            <div class="topic font-Prachachon md:inline-block hidden">
              ในเหตุการณ์เดือน
            </div>
            <div class="topic font-Prachachon md:hidden inline-block">
              ในเหตุการณ์
            </div>
            <Button class="w-full max-w-[300px] md:inline hidden p-6 !py-4 mt-5 bg-white hover:bg-cream transition-colors" @click="$router.push('/intro')">
              <div class="text-size-[1.5rem] font-bold">
                Start
              </div>
            </Button>
          </div>
          <div class="flex">
            <div class="topic font-Prachachon md:hidden inline-block">
              เดือน
            </div>
            <div class="red-circle">
              <div class="font-Prachachon p-5">
                ตุลาฯ
              </div>
            </div>
          </div>
        </div>
        <Button class="w-full max-w-[200px] md:(hidden) p-6 !py-4 mt-12 bg-white hover:bg-cream transition-colors" @click="$router.push('/intro')">
          <div class="text-size-[1.5rem] font-bold">
            Start
          </div>
        </Button>
      </div>
    </div>
    <div class="bg absolute bottom-0 left-0 h-[500px] w-full">
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: url('../assets/landing.png') repeat-x left bottom;
}

.topic {
  @apply z-0 text-size-[9rem] <lg:text-size-[6rem] <md:text-size-[4rem] text-white mr-3;
}

.red-circle {
  @apply text-size-[9rem] <lg:text-size-[6rem] <md:(text-size-[4rem]);
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
