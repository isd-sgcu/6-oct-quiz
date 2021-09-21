<script setup lang="ts">
// const route = useRoute()

// const props = defineProps<{
//   name: string
// }>()

const firstName = 'สุธรรม'
const lastName = 'แสงประทุม'
const fullName = `${firstName}\n${lastName}`
const detail = 'เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม เย้วเช็งเม้ง ซินโดรมบลูเบอร์รี่แกสโซฮอล์ ดีพาร์ตเมนต์แฟรนไชส์ม้าหินอ่อนลิมิต นินจาช็อปเปอร์เฟอร์รี่ เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม'
</script>

<template>
  <div class="relative pt-20">
    <ResultPicture class="absolute pt-20 top-6 r-result-picture" />
    <div class="r-result-layout">
      <ResultTextGroup :result-full-name="fullName" :result-detail="detail" class="pt-60" />
      <ResultIconGroup class="mt-8" />
      <ResultButtonGroup class="mt-10" />
    </div>
  </div>
</template>

<style>
.r-result-picture {
  @apply right-3 xs:(right-10) sm:() md:() lg:() xl:() 2xl:();
}
.r-result-layout {
  @apply mx-5 xs:(mx-8) sm:() md:() lg:() xl:() 2xl:();
}
</style>
