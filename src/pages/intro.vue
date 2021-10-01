<template>
  <div class="flex justify-center pt-50 <xl:pt-40 pb-20 overflow-hidden">
    <div class="z-10 flex flex-col w-full self-center ">
      <div v-for="(item, key) in dummyData" :key="key" class="flex justify-start pb-15 pt-3 relative px-20 <md:px-10" :class="!(key & 1) ? 'justify-start': 'justify-end'">
        <div class="max-w-[1000px] overflow-hidden" :class="(key & 1) && 'flex flex-col items-end text-right'">
          <HeaderText class="mb-5 leading-relaxed text-size-[3.5rem] <xl:(text-size-[3rem] leading-relaxed) <md:(text-size-[2rem] leading-10) transition-all">
            {{ item.title }}
          </HeaderText>
          <ParagraphText class="transition-all leading-relaxed text-size-[2rem] <xl:(text-size-[1.5rem] leading-10) leading-10 <md:(text-size-[1rem] leading-5)">
            {{ item.details }}
          </ParagraphText>
        </div>
        <div class="transition-all color-circle absolute w-[400px] h-[400px] <xl:(w-[350px] h-[350px]) <md:(w-[250px] h-[250px]) rounded-full" :class="!(key & 1) ? 'left-[-200px] <xl:(left-[-175px]) <md:(left-[-125px])': 'right-[-200px] <xl:(right-[-175px]) <md:(right-[-125px])'" style="z-index: -1;" :style="{ backgroundColor: item.bgColor}">
        </div>
      </div>
      <Button class="w-full max-w-[300px] max-h-max py-4 mt-15 self-center bg-[#FCFBF5] hover:bg-cream transition-colors" @click="$router.push('/story')">
        <ParagraphText class="text-size-[1.25rem]">
          เริ่มการทดสอบ
        </ParagraphText>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const dummyData = [
  {
    title: 'ในเดือนตุลาฯ หนึ่งของปี ๒๕๑๙',
    details: ' มีเพื่อนเราหลายคนผ่านเหตุการณ์สําคัญหนึ่งของชีวิตมา',
    bgColor: '#FFAE11',
  },
  {
    title: '6 ตุลาฯ',
    details: ' พรากหลายอย่างจากพวกเขาและเธอไปมากมาย แต่กระนั้นความสูญเสียนี้ก็ให้บทเรียนลํา้าค่าและสร้างตัวตนของคนเดือนตุลาฯ มาไม่น้อย เขาและเธอเหล่านี้เลือกเส้นทางประชาธิปไตยอย่างแน่วแน่มาตลอด แต่บางคนก็เปลี่ยนแปลงไป มากบ้างน้อยบ้าง',
    bgColor: '#EC371F',
  },
  {
    title: 'คุณคือใครใน 6 ตุลาฯ',
    details: 'คน 6 ตุลาฯ สร้างอะไรไว้ให้สังคมมากมาย จิตวิญญาณของพวกเขาและความเป็นคน 6 ตุลาฯ เติบโตในทุก ๆ ที่ คุณอยากรู้รึเปล่า ว่าจิตวิญญาณของพวกเขาเติบโตในตัวคุณบ้างไหม คุณคือใครใน 6 ตุลาฯ',
    bgColor: '#9F79B7',
  },
]
</script>

<style scoped>
.color-circle {
  top: 50%;
  transform: translateY(-55%);
}
</style>
