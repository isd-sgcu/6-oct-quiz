<script setup lang="ts">
// const route = useRoute()

// const props = defineProps<{
//   name: string
// }>()

const icon1OnClick = () => {

}
const icon2OnClick = () => {

}
const icon3OnClick = () => {

}

const firstName = 'สุธรรม'
const lastName = 'แสงประทุม'
const fullName = `${firstName}\n${lastName}`
const detail = 'เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม เย้วเช็งเม้ง ซินโดรมบลูเบอร์รี่แกสโซฮอล์ ดีพาร์ตเมนต์แฟรนไชส์ม้าหินอ่อนลิมิต นินจาช็อปเปอร์เฟอร์รี่ เรซิน บาบูนแหววเอ๋อ ไพลินตี๋อุปนายิกาซีเรียส ซีเนียร์ธรรมาสงบสุข ซูมถ่ายทำเอ็กซ์เพรสโรลออน เบอร์เกอร์แจม'

const shareIcon1Src = 'https://pbs.twimg.com/profile_images/1180519637328502784/EbolKHV8_400x400.png'
const shareIcon2Src = 'https://img.wongnai.com/p/256x256/2015/06/11/5489a807f7e44d7992c4641601402882.jpg'
const shareIcon3Src = 'https://pbs.twimg.com/profile_images/1350525503740862465/04a5AOWU.jpg'
</script>

<template>
  <div>
    <ResultPicture class="absolute top-6 right-3" />
    <div class="mx-5 relative">
      <h1 class="pt-65 text-2rem whitespace-pre">
        {{ fullName }}
      </h1>
      <p class="mt-3">
        {{ detail }}
      </p>
      <div class="mt-8 space-x-4 flex items-center">
        <span class="text-lg">แชร์:</span>
        <RoundedIcon :img-src="shareIcon1Src" :img-alt="'cat 1'" @click="icon1OnClick" />
        <RoundedIcon :img-src="shareIcon2Src" :img-alt="'cat 2'" @click="icon2OnClick" />
        <RoundedIcon :img-src="shareIcon3Src" :img-alt="'cat 3'" @click="icon3OnClick" />
      </div>
    </div>
  </div>
</template>

<style>
</style>
