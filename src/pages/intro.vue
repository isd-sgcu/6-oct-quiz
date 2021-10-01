<template>
  <div class="flex justify-center pt-20 pb-20 overflow-hidden relative">
    <div class="z-10 flex flex-col w-full self-center <md:px-5">
      <div v-for="(item, key) in dummyData" :id="`el-${key}`" :key="key" class="flex justify-start pb-15 pt-3 relative px-20 <md:px-0 h-screen items-center transition-all duration-500" :class="`${!(key & 1) ? 'justify-start': 'justify-end'} ${(key === presentNum) ? 'opacity-100': 'opacity-0'}`">
        <div class="max-w-[1000px] overflow-hidden flex flex-col" :class="(key & 1) && 'flex flex-col items-end text-right'">
          <HeaderText class="mb-5 text-size-[3.5rem] leading-20 <xl:(text-size-[3rem] leading-16) <md:(text-size-[2.5rem] leading-12) transition-all">
            {{ item.title }}
          </HeaderText>
          <ParagraphText class="transition-all text-size-[2rem] leading-14 <xl:(text-size-[1.5rem] leading-10)">
            {{ item.details }}
          </ParagraphText>
        </div>
        <div class="transition-all absolute w-[800px] h-[800px] <xl:(w-[750px] h-[750px]) <md:(w-[620px] h-[620px]) rounded-full" :class="!(key & 1) ? 'left-[-400px] <xl:(left-[-375px]) <md:(left-[-310px])': 'right-[-400px] <xl:(right-[-375px]) <md:(right-[-310px])'" style="z-index: -1;" :style="{ backgroundColor: item.bgColor}">
        </div>
      </div>
      <Button :id="`el-${dummyData.length}`" class="w-full max-w-[300px] max-h-max py-4 self-center bg-[#FCFBF5] hover:bg-cream transition-colors mt-5 " :class="`${(presentNum === dummyData.length - 1) ? 'opacity-100': 'opacity-0'}`" @click="$router.push('/story')">
        <ParagraphText class="text-size-[1.75rem]">
          เริ่มการทดสอบ
        </ParagraphText>
      </Button>
    </div>
    <mdi-arrow-down-circle-outline class="fixed bottom-10 text-size-[3rem] cursor-pointer z-30 transition-opacity duration-500" :class="isHide ? 'opacity-0': 'opacity-100'" @click="handleScroll" />
  </div>
</template>

<script setup lang="ts">
import { elementScrollIntoViewPolyfill, elementScrollIntoView } from 'seamless-scroll-polyfill'

elementScrollIntoViewPolyfill()
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

const presentNum = ref<number>(0)
const isHide = ref<boolean>(false)
let elHeight: number[] = []

onMounted(() => {
  const elSz = dummyData.length
  for (let i = 0; i < elSz; i++) {
    const el = document.getElementById(`el-${i}`)
    if (el)
      elHeight.push(el.offsetTop)
  }
  window.onscroll = () => {
    if (window.scrollY + window.screen.height >= document.documentElement.scrollHeight - 10)
      isHide.value = true

    else
      isHide.value = false

    for (let i = elSz - 1; i >= 0; i--) {
      if (elHeight[i] - 300 <= window.scrollY) {
        presentNum.value = Math.max(0, i)
        break
      }
    }
  }

  window.onresize = () => {
    elHeight = []
    for (let i = 0; i < elSz; i++) {
      const el = document.getElementById(`el-${i}`)
      if (el)
        elHeight.push(el.offsetTop)
    }
  }
})

const handleScroll = () => {
  if (isHide.value) return
  const nextIdx = Math.min(elHeight.length, presentNum.value + 1)
  const el = document.getElementById(`el-${nextIdx}`)
  if (el) elementScrollIntoView(el, { behavior: 'smooth' })
}
</script>
