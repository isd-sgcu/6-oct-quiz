<script setup lang="ts">
const name = ref<string>()
const isInvalid = ref<boolean>()

const handleSubmit = () => {
  if (name.value === '') {
    isInvalid.value = true
    return
  }

  isInvalid.value = false
  // Save name logic here
}
</script>

<template>
  <div class="flex justify-center items-center h-full flex-col">
    <div class="z-10 m-10 flex items-center flex-wrap">
      <HeaderText class="topic">
        คุณคือใครในเหตุการณ์
      </HeaderText>
      <div class="red-circle">
        <HeaderText class="p-5 <md:p-11">
          6 ตุลา
        </HeaderText>
      </div>
    </div>
    <div class="z-10 flex flex-col items-center w-full px-10">
      <ParagraphText class="text-size-[1.5rem] <md:text-size-[1rem] mb-5">
        กรอกชื่อเล่นของคุณเพื่อเริ่มทดสอบ
      </ParagraphText>
      <div class="p-2 pl-4 pr-4 mt-2 rounded-lg border-black border-width-[1px] bg-white w-full max-w-[350px]" :class="isInvalid && 'invalid'">
        <input class="outline-none w-full font-Trirong text-input" type="text" placeholder="กรอกชื่อเล่น">
      </div>
      <Button class="max-w-max p-6 !py-2 mt-5 bg-white hover:bg-cream transition-colors" @submit="() => handleSubmit()">
        <ParagraphText>
          เริ่มการทดสอบ
        </ParagraphText>
      </Button>
    </div>
    <div class="absolute bottom-0 w-full overflow-hidden">
      <div class="white-fill" />
    </div>
  </div>
</template>

<style scoped>
.white-fill {
  @apply h-[300px] w-full;
  filter: brightness(0) invert(1);
  background: url('../assets/city.svg') repeat-x left center;
  /* animation: displace 2s linear infinite;
  -webkit-animation: displace 2s linear infinite; */
}

.invalid {
  @apply border-red;
}

.topic {
  @apply z-0 text-size-[3.5rem] <md:text-size-[3rem] <md:(mb-[-80px]);
  display: inline-block;
}

.red-circle {
  @apply text-size-[3.5rem] <md:text-size-[3rem] <md:(ml-[-43px]);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
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
  @apply text-size-[1.25rem] <md:text-size-[1rem];
  text-align: center;
}

.text-input::-webkit-input-placeholder {
  text-align: center;
}

.text-input:-moz-placeholder {
  text-align: center;
}
</style>

<route lang="yaml">
meta:
  layout: landing
</route>
