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
  <div>
    <ResultPicture class="absolute top-6 right-3" />
    <div class="mx-5 relative">
      <TextGroup :result-full-name="fullName" :result-detail="detail" class="pt-65" />
      <ResultIconGroup class="mt-8" />
      <ResultButtonGroup class="mt-10" />
    </div>
  </div>
</template>

<style>
</style>
