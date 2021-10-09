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

const currentColorSet = reactive({
  first: firstColorSet.first,
  second: firstColorSet.second,
  third: firstColorSet.third,
})

const backgroundImage = computed(() => {
  const { r: r1, g: g1, b: b1 } = toRefs(currentColorSet.first)
  const { r: r2, g: g2, b: b2 } = toRefs(currentColorSet.second)
  const { r: r3, g: g3, b: b3 } = toRefs(currentColorSet.third)
  return `linear-gradient(180deg, rgb(${`${r1.value},${b1.value},${g1.value}`}) 0%, rgb(${`${r2.value},${b2.value},${g2.value}`}) ${secondPercent.value}%, rgb(${`${r3.value},${b3.value},${g3.value}`}) 100%,)`
})

const getRGBDiff = (r: Ref<number>, g: Ref<number>, b: Ref<number>, next: RGB) => {
  const dr = next.r - r.value
  const dg = next.g - g.value
  const db = next.b - b.value
  return { dr, dg, db }
}

// This changes the actual ref value
const singleTransition = (color: Ref<number>, diff: number, duration: number, intervalSize: number) => {
  const changePerInterval = (diff / duration) * intervalSize
  const numberOfAllIntervals = duration / intervalSize
  let intervalCount = 0

  const interval = setInterval(() => {
    color.value += changePerInterval
    if (intervalCount++ === numberOfAllIntervals)
      clearInterval(interval)
  }, intervalSize)
}

const transitionSingleRGB = (
  { r, g, b }: {r: Ref<number>; g: Ref<number>; b: Ref<number>},
  next: RGB,
  duration: number,
  intervalSize: number,
) => {
  const { dr, dg, db } = getRGBDiff(r, g, b, next)

  singleTransition(r, dr, duration, intervalSize)
  singleTransition(g, dg, duration, intervalSize)
  singleTransition(b, db, duration, intervalSize)
}

const transitionRGBs = (currentColorSet: ColorSet, nextColorSet: ColorSet, duration: number, intervalSize: number) => {
  transitionSingleRGB({ ...toRefs(currentColorSet.first) }, nextColorSet.first, duration, intervalSize)
  transitionSingleRGB({ ...toRefs(currentColorSet.second) }, nextColorSet.second, duration, intervalSize)
  transitionSingleRGB({ ...toRefs(currentColorSet.third) }, nextColorSet.third, duration, intervalSize)
}

const transitionGradient = (currentColorSet: ColorSet, nextColorSet: ColorSet, secondPercent: Ref<number>, nextSecondPercent: number, duration: Milisecond, intervalSize: Milisecond = 10) => {
  transitionRGBs(currentColorSet, nextColorSet, duration, intervalSize)

  const dsecondPercent = nextSecondPercent - secondPercent.value
  singleTransition(secondPercent, dsecondPercent, duration, intervalSize)
}

// for on click
const changeBackgroundGradient = () => {
  const nextSecondPercent = 66
  const transitionDur = 300
  transitionGradient(
    currentColorSet,
    nextColorSet,
    secondPercent,
    nextSecondPercent,
    transitionDur,
  )
}

console.log(backgroundImage.value)
</script>

<template>
  <div
    :style="{ backgroundImage }"
  >
    <button @click="changeBackgroundGradient">
      Change background
    </button>
  </div>
</template>

<style>
</style>
