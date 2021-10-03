<template>
  <div class="flex justify-center pt-10 overflow-hidden relative">
    <div class="z-10 flex flex-col w-full self-center <md:px-5">
      <div v-for="(item, key) in info" :id="`el-${key}`" :key="key" class="flex justify-center pb-15 pt-3 relative px-20 <md:px-0 h-screen items-center transition-all duration-2500" :class="`${(key === presentNum) ? 'opacity-100': 'opacity-0'}`">
        <div :id="`el-text-${key}`" class="max-w-[600px] overflow-hidden flex flex-col text-center">
          <ParagraphText v-for="(text, idx) of item.details" :id="`el-text-${key}`" :key="`text-${idx}`" class="transition-all text-size-[2rem] mb-7 leading-14 <xl:(text-size-[1.5rem] leading-12) <md:(text-size-[1.25rem] leading-10)">
            {{ text }}
          </ParagraphText>
          <Button v-if="key === info.length - 1" :id="`el-${info.length}`" class="w-full max-w-[300px] max-h-max py-4 <md:(py-3) self-center bg-[#FCFBF5] hover:bg-cream transition-opacity mt-5 " @click="$router.push('/story')">
            <ParagraphText class="text-size-[1.75rem] <xl:(text-size-[1.5rem]) <md:(text-size-[1.25rem])">
              เริ่มการทดสอบ
            </ParagraphText>
          </Button>
        </div>
      </div>
    </div>
    <mdi-arrow-down-circle-outline class="scroll-button fixed bottom-10 text-[#444444] text-size-[3rem] cursor-pointer transition-opacity duration-500" :class="isHide ? 'opacity-0': 'opacity-50 z-30'" @click="handleScroll" />
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
    details: ['ในเดือนตุลาฯ หนึ่งของปี ๒๕๑๙', 'มีเพื่อนเราหลายคนผ่านเหตุการณ์สําคัญหนึ่งของชีวิตมา'],
  },
  {
    details: ['6 ตุลาฯ พรากหลายอย่างจากพวกเขาและเธอไปมากมาย', 'แต่กระนั้นความสูญเสียนี้ก็ให้บทเรียนล้ำค่าและสร้างตัวตนของคนเดือนตุลาฯ มาไม่น้อย', 'เขาและเธอเหล่านี้เลือกเส้นทางประชาธิปไตยอย่างแน่วแน่มาตลอด แต่บางคนก็เปลี่ยนแปลงไป มากบ้างน้อยบ้าง'],
  },
  {
    details: ['คน 6 ตุลาฯ สร้างอะไรไว้ให้สังคมมากมาย จิตวิญญาณของพวกเขาและความเป็นคน 6 ตุลาฯ เติบโตในทุก ๆ ที่', 'คุณอยากรู้รึเปล่า ว่าจิตวิญญาณของพวกเขาเติบโตในตัวคุณบ้างไหม คุณคือใครใน 6 ตุลาฯ'],
  },
]

const presentNum = ref<number>(-1)
const isHide = ref<boolean>(false)
let elHeight: number[][] = []

let tresholdOffset = window.innerHeight / 2
let timeOutNo = -1

onMounted(() => {
  tresholdOffset = window.innerHeight / 2
  const elSz = info.length
  for (let i = 0; i < elSz; i++) {
    const el = document.getElementById(`el-${i}`)

    if (el)
      elHeight.push([el.offsetTop - tresholdOffset, el.offsetTop + el.offsetHeight + tresholdOffset])
  }
  window.onscroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight)
      isHide.value = true

    else if (timeOutNo === -1)
      isHide.value = false

    for (let i = elSz - 1; i >= 0; i--) {
      if (elHeight[i][0] <= window.scrollY && window.scrollY <= elHeight[i][1]) {
        presentNum.value = Math.max(0, i)
        break
      }
      else {
        presentNum.value = -1
      }
    }

    if (!isHide.value) {
      if (timeOutNo !== -1) return

      isHide.value = true
      timeOutNo = window.setTimeout(() => {
        if (window.innerHeight + window.pageYOffset < document.documentElement.scrollHeight)
          isHide.value = false
        timeOutNo = -1
      }, 1500)
    }
  }

  window.onresize = () => {
    elHeight = []
    tresholdOffset = window.innerHeight / 2
    for (let i = 0; i < elSz; i++) {
      const el = document.getElementById(`el-${i}`)
      if (el)
        elHeight.push([el.offsetTop - tresholdOffset, el.offsetTop + el.offsetHeight + tresholdOffset])
    }
  }

  setTimeout(() => presentNum.value = 0, 1000)
})

function scrollToSmoothly(pos: number, time: number) {
  const currentPos = window.pageYOffset
  let start: number | null = null
  const calculateEase = (x: number) => {
    return x * x * x * (10 + x * (6 * x - 15))
  }
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start
    const progress = currentTime - start

    const varX = progress / time
    if (currentPos < pos)
      window.scrollTo(0, ((pos - currentPos) * calculateEase(varX)) + currentPos)
    else
      window.scrollTo(0, currentPos - ((currentPos - pos) * calculateEase(varX)))

    if (progress < time)
      window.requestAnimationFrame(step)
    else
      window.scrollTo(0, pos)
  })
}

const handleScroll = () => {
  if (isHide.value) return
  const nextIdx = Math.min(elHeight.length - 1, presentNum.value + 1)
  const el = document.getElementById(`el-${nextIdx}`)

  if (el) scrollToSmoothly(el.offsetTop, 600)
}

const playQuiz = () => {
  game.initNewQuiz()
  router.push('/story')
}

</script>

<style scoped>
@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
.scroll-button {
  animation: bounce 1s infinite ease-out;
}
</style>
