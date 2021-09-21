<template>
  <div class="flex justify-center pt-30 pb-20">
    <div class="z-10 flex flex-col w-full max-w-[1280px] self-center ">
      <div v-for="(item, key) in dummyData" :key="key" class="flex justify-start pb-15 pt-3 relative <2xl:overflow-hidden px-20 <md:px-10" :class="!(key & 1) ? 'justify-start': 'justify-end'">
        <div class="max-w-[700px]" :class="(key & 1) && 'flex flex-col items-end text-right'">
          <HeaderText class="mb-5 text-size-[3rem] <md:text-size-[2rem] transition-all">
            {{ item.title }}
          </HeaderText>
          <ParagraphText class="transition-all leading-10 text-size-[1.5rem] <md:(text-size-[1rem] leading-5)">
            {{ item.details }}
          </ParagraphText>
        </div>
        <div class="transition-all absolute w-[300px] h-[300px] color-circle <md:(w-[200px] h-[200px]) rounded-full" :class="!(key & 1) ? 'left-[-100px] <2x': 'right-[-100px]'" style="z-index: -1;" :style="{ backgroundColor: item.bgColor}">
        </div>
      </div>
      <Button class="w-full max-w-[200px] self-center bg-[#FCFBF5] hover:bg-cream transition-colors" @click="$router.push('/story')">
        <ParagraphText>
          เริ่มการทดสอบ
        </ParagraphText>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const dummyData = [
  {
    title: 'คำอธิบาย 1',
    details: 'เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม เย้วเช็งเม้ง ซินโดรมบลูเบอร์รี่แกสโซฮอล์ ดีพาร์ตเมนต์แฟรนไชส์ม้าหินอ่อนลิมิต นินจาช็อปเปอร์เฟอร์รี่ เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม',
    bgColor: '#FFAE11',
  },
  {
    title: 'คำอธิบาย 2',
    details: 'เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม เย้วเช็งเม้ง ซินโดรมบลูเบอร์รี่แกสโซฮอล์ ดีพาร์ตเมนต์แฟรนไชส์ม้าหินอ่อนลิมิต นินจาช็อปเปอร์เฟอร์รี่ เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม',
    bgColor: '#EC371F',
  },
  {
    title: 'คำอธิบาย 3',
    details: 'เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม เย้วเช็งเม้ง ซินโดรมบลูเบอร์รี่แกสโซฮอล์ ดีพาร์ตเมนต์แฟรนไชส์ม้าหินอ่อนลิมิต นินจาช็อปเปอร์เฟอร์รี่ เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม',
    bgColor: '#9F79B7',
  },
]
</script>

<style scoped>
.color-circle {
  top: 50%;
  transform: translateY(-50%);
}
</style>
