<script setup lang="ts">
// const route = useRoute()

// const props = defineProps<{
//   name: string
// }>()

const { width } = useWindowSize()

const fullName = 'สุธรรม แสงประทุม'
const detail = 'เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม เย้วเช็งเม้ง ซินโดรมบลูเบอร์รี่แกสโซฮอล์ ดีพาร์ตเมนต์แฟรนไชส์ม้าหินอ่อนลิมิต นินจาช็อปเปอร์เฟอร์รี่ เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม'

const name = computed(() => {
  return width.value < 1024 ? fullName.replace(' ', '\n') : fullName
})
</script>

<template>
  <div
    class="relative pt-20 lg:(flex pt-0 min-h-screen items-center w-9xl mx-auto justify-between)"
  >
    <ResultPicture class="absolute r-result-picture" />
    <div class="r-result-layout">
      <ResultTextGroup
        :result-full-name="name"
        :result-detail="detail"
        class="pt-60 lg:(pt-0)"
      />
      <ResultIconGroup class="mt-8" />
      <ResultButtonGroup class="mt-10" />
    </div>
  </div>
</template>

<style>
.r-result-picture {
  @apply pt-20 top-6 right-3 xs:(right-10) sm:(top-2 right-12) lg:(static pt-0) xl:() 2xl:();
}
.r-result-layout {
  @apply mx-5 xs:(mx-8) sm:() md:() lg:(pt-10 mx-0 ml-15 space-y-15) xl:() 2xl:();
}
</style>
