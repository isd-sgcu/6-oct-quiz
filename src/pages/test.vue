<script setup lang="ts">
import { Ref } from 'vue'

type RGB = {
  r: number
  g: number
  b: number
}

// There are 3 rgb values in each linear-gradient,
// hence first, second, and third
type ColorSet = {
  first: RGB
  second: RGB
  third: RGB
}

type Milisecond = number

const getReactiveRGB = (r: number, g: number, b: number) => {
  return reactive({ r, g, b })
}

const getColorSet = (first: number[], second: number[], third: number[]) => {
  return {
    first: getReactiveRGB(first[0], first[1], first[2]),
    second: getReactiveRGB(second[0], second[1], second[2]),
    third: getReactiveRGB(third[0], third[1], third[2]),
  }
}

// This is where we specify color sets
// There are 3 rgb values in each set
const firstColorSet = getColorSet([120, 103, 103], [235, 196, 169], [204, 128, 118])
const nextColorSet = getColorSet([87, 70, 59], [230, 182, 149], [164, 57, 43])
// secondPercent is the the percent where the second rgb value starts
const secondPercent = ref(66)
const transitionDur = ref<Milisecond>(1000)

const currentColorSet = reactive({
  first: firstColorSet.first,
  second: firstColorSet.second,
  third: firstColorSet.third,
})

const backgroundImage = computed(() => {
  const { r: r1, g: g1, b: b1 } = toRefs(currentColorSet.first)
  const { r: r2, g: g2, b: b2 } = toRefs(currentColorSet.second)
  const { r: r3, g: g3, b: b3 } = toRefs(currentColorSet.third)
  return `linear-gradient(180deg, rgb(${`${r1.value},${b1.value},${g1.value}`}) 0%, rgb(${`${r2.value},${b2.value},${g2.value}`}) ${secondPercent.value}%, rgb(${`${r3.value},${b3.value},${g3.value}`}) 100%)`
})

const getRGBDiff = (r: Ref<number>, g: Ref<number>, b: Ref<number>, next: RGB) => {
  const dr = next.r - r.value
  const dg = next.g - g.value
  const db = next.b - b.value
  return { dr, dg, db }
}

// This changes the actual ref value
const singleTransition = (value: Ref<number>, diff: number, duration: Milisecond, intervalSize: Milisecond, numberOfAllIntervals: number) => {
  const changePerInterval = (diff / duration) * intervalSize
  let intervalCount = 0
  const valueAfter = value.value + diff

  const interval = setInterval(() => {
    value.value += changePerInterval
    // value.value = Math.round(value.value)
    if (intervalCount++ === numberOfAllIntervals) {
      clearInterval(interval)
      value.value = valueAfter // to correct the little error
    }
  }, intervalSize)
}

const transitionSingleRGB = (
  { r, g, b }: { r: Ref<number>; g: Ref<number>; b: Ref<number> },
  next: RGB,
  duration: Milisecond,
  intervalSize: Milisecond,
  numberOfAllIntervals: number,
) => {
  const { dr, dg, db } = getRGBDiff(r, g, b, next)

  singleTransition(r, dr, duration, intervalSize, numberOfAllIntervals)
  singleTransition(g, dg, duration, intervalSize, numberOfAllIntervals)
  singleTransition(b, db, duration, intervalSize, numberOfAllIntervals)
}

const transitionRGBs = (currentColorSet: ColorSet, nextColorSet: ColorSet, duration: Milisecond, intervalSize: Milisecond, numberOfAllIntervals: number) => {
  transitionSingleRGB({ ...toRefs(currentColorSet.first) }, nextColorSet.first, duration, intervalSize, numberOfAllIntervals)
  transitionSingleRGB({ ...toRefs(currentColorSet.second) }, nextColorSet.second, duration, intervalSize, numberOfAllIntervals)
  transitionSingleRGB({ ...toRefs(currentColorSet.third) }, nextColorSet.third, duration, intervalSize, numberOfAllIntervals)
}

const transitionGradient = (currentColorSet: ColorSet, nextColorSet: ColorSet, secondPercent: Ref<number>, nextSecondPercent: number, duration: Milisecond, intervalSize: Milisecond = 10) => {
  const numberOfAllIntervals = Math.round(duration / intervalSize)

  transitionRGBs(currentColorSet, nextColorSet, duration, intervalSize, numberOfAllIntervals)

  const dsecondPercent = nextSecondPercent - secondPercent.value
  singleTransition(secondPercent, dsecondPercent, duration, intervalSize, numberOfAllIntervals)
}

// for on click
const changeBackgroundGradient = () => {
  const nextSecondPercent = 67
  transitionGradient(
    currentColorSet,
    nextColorSet,
    secondPercent,
    nextSecondPercent,
    transitionDur.value,
  )
}

</script>

<template>
  <div class="min-h-screen" :style="{ backgroundImage /* How do we do this? lol */ }">
    <button class="bg-white p-3 rounded" @click="changeBackgroundGradient">
      Change background
    </button>
    <h1 class="text-4xl text-white">
      transition duration {{ transitionDur }} ms
    </h1>
    <input v-model="transitionDur" type="range" class="block" max="2000">
    <h1 class="text-5xl mt-10 text-white">
      current colors:
    </h1>
    <h2 class="text-3xl text-white">
      {{ currentColorSet.first }}
    </h2>
    <h2 class="text-3xl text-white">
      {{ currentColorSet.second }}
    </h2>
    <h2 class="text-3xl text-white">
      {{ currentColorSet.third }}
    </h2>
    <h2 class="text-4xl text-white">
      {{ backgroundImage }}
    </h2>
  </div>
</template>

<style>
</style>
