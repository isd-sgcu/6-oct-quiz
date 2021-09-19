<template>
  <div>
    <HeaderText>
      การเดินทางขากลับคงจะเหงา
    </HeaderText>
    <ParagraphText>
      การเดินทางขากลับคงจะเหงาdfafsdfsd
    </ParagraphText>
    dsda
  </div>
  <div class="absolute bottom-0 w-full overflow-hidden">
    <div class="white-fill" />
  </div>
</template>

<style scoped>
@keyframes move {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
.white-fill {
  /* See this for more info https://codepen.io/sosuke/pen/Pjoqqp */
  @apply h-[300px] w-full;
  filter: brightness(0) invert(1);
  background-image: url('../assets/city.svg');
  animation: move 5s infinite linear;
}
</style>
