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
    <div class="z-10">
      <ParagraphText>
        กรอกชื่อเล่นของคุณเพื่อเริ่มทดสอบ
      </ParagraphText>
      <div class="p-2 pl-4 pr-4 mt-2 rounded-lg border-black border-width-[1px] bg-white">
        <input class="outline-none w-full" type="text" placeholder="กรอกชื่อเล่น">
      </div>
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

</style>

<route lang="yaml">
meta:
  layout: landing
</route>
