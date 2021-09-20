<template>
  <div class="flex justify-center h-full relative">
    <div class="items-center z-10 align-middle m-20 text-center">
      <HeaderText class="topic">
        คุณคือใครในเหตุการณ์
      </HeaderText>
      <div class="red-circle">
        <HeaderText class="p-5">
          6 ตุลา
        </HeaderText>
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
  font-size: 3.875rem;
  display: inline-block;
  margin-top: auto;
}

.red-circle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: white;
  font-size: 3.875rem;
  border-radius: 50%;
  background-color: red;
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
