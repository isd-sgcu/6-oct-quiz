<template>
  <div class="flex justify-center pt-20 pb-20 overflow-hidden">
    <div class="z-10 flex flex-col w-full self-center ">
      <div v-for="(item, key) in dummyData" :key="key" class="flex justify-start pb-15 pt-3 relative px-20 <md:px-10 h-screen items-center" :class="!(key & 1) ? 'justify-start': 'justify-end'">
        <div class="max-w-[1000px] overflow-hidden flex flex-col" :class="(key & 1) && 'flex flex-col items-end text-right'">
          <HeaderText class="mb-5 text-size-[3.5rem] leading-20 <xl:(text-size-[3rem] leading-16) <md:(text-size-[2.5rem] leading-12) transition-all">
            {{ item.title }}
          </HeaderText>
          <ParagraphText class="transition-all text-size-[2rem] leading-14 <xl:(text-size-[1.5rem] leading-10) <md:(text-size-[1.25rem] leading-10)">
            {{ item.details }}
          </ParagraphText>
        </div>
        <div class="transition-all absolute w-[800px] h-[800px] <xl:(w-[750px] h-[750px]) <md:(w-[620px] h-[620px]) rounded-full" :class="!(key & 1) ? 'left-[-400px] <xl:(left-[-375px]) <md:(left-[-310px])': 'right-[-400px] <xl:(right-[-375px]) <md:(right-[-310px])'" style="z-index: -1;" :style="{ backgroundColor: item.bgColor}">
        </div>
      </div>
      <Button class="w-full max-w-[300px] max-h-max py-4 <md:mt-5 <sm:mt-4 self-center bg-[#FCFBF5] hover:bg-cream transition-colors" @click="$router.push('/story')">
        <ParagraphText class="text-size-[1.5rem]">
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
    details: ' พรากหลายอย่างจากพวกเขาและเธอไปมากมาย แต่กระนั้นความสูญเสียนี้ก็ให้บทเรียนล้ำค่าและสร้างตัวตนของคนเดือนตุลาฯ มาไม่น้อย เขาและเธอเหล่านี้เลือกเส้นทางประชาธิปไตยอย่างแน่วแน่มาตลอด แต่บางคนก็เปลี่ยนแปลงไป มากบ้างน้อยบ้าง',
    bgColor: '#EC371F',
  },
  {
    title: 'คุณคือใครใน 6 ตุลาฯ',
    details: 'คน 6 ตุลาฯ สร้างอะไรไว้ให้สังคมมากมาย จิตวิญญาณของพวกเขาและความเป็นคน 6 ตุลาฯ เติบโตในทุก ๆ ที่ คุณอยากรู้รึเปล่า ว่าจิตวิญญาณของพวกเขาเติบโตในตัวคุณบ้างไหม คุณคือใครใน 6 ตุลาฯ',
    bgColor: '#9F79B7',
  },
]
</script>
