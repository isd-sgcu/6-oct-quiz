<template>
  <div class="flex justify-center pt-20 pb-20 overflow-hidden relative">
    <div class="z-10 flex flex-col w-full self-center <md:px-5">
      <div v-for="(item, key) in info" :id="`el-${key}`" :key="key" class="flex justify-start pb-15 pt-3 relative px-20 <md:px-0 h-screen items-center transition-all duration-1000" :class="`${!(key & 1) ? 'justify-start': 'justify-end'} ${(key === presentNum) ? 'opacity-100': 'opacity-0'}`">
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
      <Button :id="`el-${info.length}`" class="w-full max-w-[300px] max-h-max py-4 self-center bg-[#FCFBF5] hover:bg-cream transition-colors mt-5 " :class="`${(presentNum === info.length - 1) ? 'opacity-100': 'opacity-0'}`" @click="playQuiz">
        <ParagraphText class="text-size-[1.75rem]">
          เริ่มการทดสอบ
        </ParagraphText>
      </Button>
    </div>
    <mdi-arrow-down-circle-outline class="fixed bottom-10 text-[#444444] text-size-[3rem] cursor-pointer transition-opacity duration-500" :class="isHide ? 'opacity-0': 'opacity-50 z-30'" @click="handleScroll" />
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '~/stores/game'
import appDescription from '~/assets/description'
import { setMetadata } from '~/utils'

const game = useGameStore()
const router = useRouter()

setMetadata({
  title: 'คำอธิบาย',
  description: appDescription,
})

const info = [

  {
    title: 'ในเดือนตุลาฯ หนึ่งของปี ๒๕๑๙',
    details: ' มีเพื่อนเราหลายคนผ่านเหตุการณ์สําคัญหนึ่งของชีวิตมา',
    bgColor: '#FFAE11',
  },
  {
    title: '6 ตุลาฯ',
    details: 'พรากหลายอย่างจากพวกเขาและเธอไปมากมาย แต่กระนั้นความสูญเสียนี้ก็ให้บทเรียนล้ำค่าและสร้างตัวตนของคนเดือนตุลาฯ มาไม่น้อย เขาและเธอเหล่านี้เลือกเส้นทางประชาธิปไตยอย่างแน่วแน่มาตลอด แต่บางคนก็เปลี่ยนแปลงไป มากบ้างน้อยบ้าง',
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
  const elSz = info.length
  for (let i = 0; i < elSz; i++) {
    const el = document.getElementById(`el-${i}`)
    if (el)
      elHeight.push(el.offsetTop)
  }
  window.onscroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight)
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

function scrollToSmoothly(pos: number, time: number) {
  const currentPos = window.pageYOffset
  let start: number | null = null
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start
    const progress = currentTime - start
    if (currentPos < pos)
      window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
    else
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))

    if (progress < time)
      window.requestAnimationFrame(step)
    else
      window.scrollTo(0, pos)
  })
}

const handleScroll = () => {
  if (isHide.value) return
  const nextIdx = Math.min(elHeight.length, presentNum.value + 1)
  const el = document.getElementById(`el-${nextIdx}`)

  if (el) scrollToSmoothly(el.offsetTop, 200)
}


const playQuiz = () => {
  game.initNewQuiz()
  router.push('/story')
}

</script>
