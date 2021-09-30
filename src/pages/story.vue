<template>
  <div class="flex items-center justify-center h-screen w-full flex-col px-8">
    <QuestionForm question-text="คำถามเรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส" />
    <div class="absolute bottom-0 w-full overflow-hidden">
      <div class="building" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.building {
  @apply h-[274px] md:h-[300px] w-full;
  background: url('../assets/city_brown.svg') repeat-x center;
}
</style>

<route lang="yaml">
meta:
  layout: quiz
</route>
