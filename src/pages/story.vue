<template>
  <div class="flex items-center justify-center h-screen w-full flex-col px-8">
    <div class="question-form">
      <div class="question-part">
        <QuestionText>
          คำถามเรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส
        </QuestionText>
      </div>
      <div class="button-list">
        <Button>
          ใช่ที่สุด
        </Button>
        <Button>
          ไม่รู้
        </Button>
        <Button>
          ไม่ใช่เลย
        </Button>
      </div>
    </div>
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

.question-part {
  @apply box-border w-full text-center break-words;
}

.question-form {
  @apply min-w-[260px] w-full transform -translate-y-17 md:-translate-y-8;
}

.button-list {
  @apply flex flex-col items-center w-full mt-[36px] font-Trirong
                        md:(flex-row flex-wrap justify-center font-semibold text-[24px]);
}

.button-list Button {
  @apply bg-[#FCFBF5] min-w-32 h-12 mb-4 md:(mb-0 mr-6 min-w-48 h-14);
}

.button-list Button:last-child {
  @apply mb-0 mr-0;
}
</style>

<route lang="yaml">
meta:
  layout: quiz
</route>
