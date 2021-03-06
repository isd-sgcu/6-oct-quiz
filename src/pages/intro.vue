<template>
  <div class="flex justify-center overflow-hidden relative">
    <div class="z-10 flex flex-col w-full self-center">
      <div
        v-for="(item, key) in info"
        :id="`el-${key}`"
        :key="key"
        class="flex flex-col justify-center pb-5 pt-5 relative px-20 <md:px-0 h-screen items-center"
        :style="{backgroundColor: item.bgColor}"
      >
        <div :id="`el-text-${key}`" class="max-w-[700px] <xl:(max-w-[600px]) <md:(max-w-[400px]) w-full overflow-hidden flex flex-col text-center transition-all duration-2500 px-5 " :class="`${(key === presentNum) ? 'opacity-100': 'opacity-0'}`">
          <ParagraphText v-for="(text, idx) of item.details" :id="`el-text-${key}`" :key="`text-${idx}`" class="transition-all mb-7 z-50 text-size-[1.75rem] leading-12 <xl:(text-size-[1.5rem] leading-10) <md:(text-size-[1.25rem] leading-8) break-words" :style="{ color: item.textColor}">
            {{ text }}
          </ParagraphText>
          <ParagraphText v-if="key === 1" class="absolute bottom-5 left-5 text-size-[1.4rem] leading-12 <xl:(text-size-[1.2rem] leading-10) <md:(text-size-[1.1rem] leading-8)">
            ที่มาของภาพ: <a ref="a" class="underline" href="https://doct6.com/" target="_blank" rel="noopener noreferrer">บันทึก 6 ตุลา</a>
          </ParagraphText>
          <img v-if="key === 1" alt="รูปอัลบั้ม" class="absolute h-screen bottom-0 left-0 object-center object-contain w-full lg:hidden pb-10" src="../assets/image_set_small.png">
          <img v-if="key === 1" ref="gallery" alt="รูปอัลบั้ม" class="absolute h-screen bottom-0 left-0 object-center object-contain w-full <lg:hidden" src="../assets/image_set_large.png">
          <img v-if="key === 2" alt="รูปเก้าอี้" class="h-screen w-full absolute top-0 bottom-0 object-contain left-0 right-0" src="../assets/chair.png">
          <div v-if="key === 3" class="absolute w-full min-w-[600px] bottom-0 left-0 xl:(-my-20)">
            <div class="relative">
              <img alt="รูปอนุสาวรีย์" class="object-contain w-full" src="../assets/continue.svg">
            </div>
          </div>
        </div>
        <span v-show="key === info.length - 1" class="font-Trirong font-light italic text-sm transition-opacity duration-1000 w-240px text-center md:(text-base w-360px) lg:(text-lg w-420px)" :class="`${(key === presentNum) ? 'opacity-100 delay-[2s]': 'opacity-0'}`">อบจ. ชวนคุณมารู้จักรุ่นพี่ในจุฬาฯ ที่ผ่านเหตุการณ์เดือนตุลา ผ่านเกมแบบทดสอบว่าคุณคล้ายกับรุ่นพี่คนใด</span>
        <Button v-if="key === info.length - 1" :id="`el-${info.length}`" class="relative z-50 w-full max-w-[300px] max-h-max py-4 <md:(py-3) self-center bg-[#FCFBF5] hover:bg-cream transition-opacity duration-1000 mt-5" :class="`${(key === presentNum) ? 'opacity-100 delay-[2s]': 'opacity-0'}`" @click="playQuiz">
          <ParagraphText class="text-size-[1.75rem] <xl:(text-size-[1.5rem]) <md:(text-size-[1.25rem])">
            เริ่มทำแบบทดสอบ
          </ParagraphText>
        </Button>
      </div>
    </div>
    <mdi-arrow-down-circle-outline class="scroll-button fixed bottom-10 text-size-[3rem] <md:(text-size-[2rem]) cursor-pointer transition-opacity duration-1000 z-30" :class="`${isHide ? 'opacity-0': 'opacity-70 z-0'}`" :style="{ color: presentNum === 0 ? '#0E0E0E': presentNum === 2 ? '#FCFBF5': '#000000'}" @click="handleScroll" />
  </div>
</template>

<script setup lang="ts">
import appDescription from '~/assets/description'
import { setMetadata } from '~/utils'

// setMetadata needs to be called before useGameStore to work
setMetadata({
  title: 'คำอธิบาย',
  description: appDescription,
})

const router = useRouter()
const { width } = useWindowSize()

const a = ref<HTMLAnchorElement | null>(null)
const gallery = ref<HTMLImageElement | null>(null)
const { isOutside } = useMouseInElement(a)

useEventListener('click', () => {
  !isOutside.value && window.open('https://doct6.com/', '_blank')
})
watch(isOutside, () => {
  if (!gallery.value) return
  if (isOutside.value)
    gallery.value.style.cursor = 'initial'
  else
    gallery.value.style.cursor = 'pointer'
})

const info = [

  {
    details: ['ในช่วงเดือนตุลาคม ๒๕๑๖-๒๕๑๙', ' รุ่นพี่ในรั้วจุฬาฯ ได้ออกนอกรั้วไปเคลื่อนไหวเพื่อสังคมที่เป็นธรรมขึ้น และได้ผ่านเหตุการณ์สําคัญครั้งหนึ่งของชีวิตมา'],
    bgColor: '#FCFBF5',
    textColor: '#000000',
  },
  {
    details: [],
    bgColor: '',
    textColor: '',
  },
  {
    details: ['ตั้งแต่เหตุการณ์ ๑๔ ตุลา ที่รัฐบาลเผด็จการถูกโค่นล้ม และเหตุการณ์ ๖ ตุลา ที่ความรุนแรงได้พรากหลายสิ่งจากพวกเขาไปมากมาย', 'เหตุการณ์ดังกล่าวได้ให้บทเรียนและสร้างตัวตนของคนเดือนตุลาในปัจจุบัน', 'พวกเขาหลายคนเลือกเดินเส้นทางประชาธิปไตยอย่างแน่วแน่ แต่บางคนก็เปลี่ยนแปลงไป'],
    bgColor: 'rgba(55, 41, 32, 0.9)',
    textColor: '#FFFFFF',
  },
  {
    details: ['คนเดือนตุลาต่างร่วมสร้างสรรค์สังคมในหลากหลายมิติ อุดมการณ์ของพวกเขาต่างเติบโตและสอดแทรกอยู่ในสังคม จนอาจส่งต่อมาถึงตัวคุณ', 'อยากรู้หรือเปล่า ว่าจิตวิญญาณของใครได้ส่งต่อมาถึงตัวคุณ คุณจะเหมือนใครในเหตุการณ์เดือนตุลา'],
    bgColor: '#FCFBF5',
    textColor: '#000000',
  },
]

const presentNum = ref<number>(-1)
const isHide = ref<boolean>(true)
let elHeight: number[][] = []

let tresholdOffset = window.innerHeight / 2
let timeOutNo = -1

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

onMounted(() => {
  tresholdOffset = window.innerHeight / 2
  const elSz = info.length
  for (let i = 0; i < elSz; i++) {
    const el = document.getElementById(`el-${i}`)

    if (el)
      elHeight.push([document.documentElement.clientHeight * i - tresholdOffset, document.documentElement.clientHeight * (i + 1) + tresholdOffset])
  }

  for (let i = elSz - 1; i >= 0; i--) {
    if (elHeight[i][0] <= window.scrollY && window.scrollY <= elHeight[i][1]) {
      presentNum.value = Math.max(0, i)
      break
    }
    else {
      presentNum.value = -1
    }
  }

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight)
    isHide.value = true

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight)
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
        if ((window.scrollY + document.documentElement.clientHeight) < document.documentElement.scrollHeight - 80)
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
        elHeight.push([document.documentElement.clientHeight * i - tresholdOffset, document.documentElement.clientHeight * (i + 1) + tresholdOffset])
    }
  }

  setTimeout(() => {
    if (presentNum.value === 0) {
      presentNum.value = 0
      isHide.value = false
    }
  }, 1000)
})

const handleScroll = () => {
  if (isHide.value) return
  const nextIdx = Math.min(elHeight.length - 1, presentNum.value + 1)
  const el = document.getElementById(`el-${nextIdx}`)

  if (el) scrollToSmoothly(el.offsetTop, 600)
}

const playQuiz = () => {
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
