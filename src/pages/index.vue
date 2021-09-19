<template>
  <div class="flex justify-center">
    <div class="items-center z-10 align-middle m-20 text-center">
      <p class="topic">
        คุณคือใครในเหตุการณ์
      </p>
      <div class="red-circle">
        <span class="p-5">6 ตุลา</span>
      </div>
    </div>
    <div class="absolute bottom-0 w-full overflow-hidden">
      <div class="white-fill" />
    </div>
  </div>
</template>

<style scoped>
/* @-webkit-keyframes displace {
  from {
    background-position: 0 center;
  }
  to {
    background-position: 100vw center;
  }
}
@keyframes displace {
  from {
    background-position: 0 center;
  }
  to {
    background-position: 100vw center;
  }
} */
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
