import { Ref } from 'vue'
import { RGB, Millisecond, ColorSet, RGB3Set } from './types'

const getReactiveRGB = (r: number, g: number, b: number) => {
  return reactive({ r, g, b })
}

export const getColorSet = (first: number[], second: number[], third: number[]) => {
  return {
    first: getReactiveRGB(first[0], first[1], first[2]),
    second: getReactiveRGB(second[0], second[1], second[2]),
    third: getReactiveRGB(third[0], third[1], third[2]),
  }
}

const getRGBDiff = (r: Ref<number>, g: Ref<number>, b: Ref<number>, next: RGB) => {
  const dr = next.r - r.value
  const dg = next.g - g.value
  const db = next.b - b.value
  return { dr, dg, db }
}

// This changes the actual ref value
const singleTransition = (value: Ref<number>, diff: number, duration: Millisecond, intervalSize: Millisecond, numberOfAllIntervals: number) => {
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
  duration: Millisecond,
  intervalSize: Millisecond,
  numberOfAllIntervals: number,
) => {
  const { dr, dg, db } = getRGBDiff(r, g, b, next)

  singleTransition(r, dr, duration, intervalSize, numberOfAllIntervals)
  singleTransition(g, dg, duration, intervalSize, numberOfAllIntervals)
  singleTransition(b, db, duration, intervalSize, numberOfAllIntervals)
}

const transitionRGBs = (currentColorSet: ColorSet, nextColorSet: ColorSet, duration: Millisecond, intervalSize: Millisecond, numberOfAllIntervals: number) => {
  transitionSingleRGB({ ...toRefs(currentColorSet.first) }, nextColorSet.first, duration, intervalSize, numberOfAllIntervals)
  transitionSingleRGB({ ...toRefs(currentColorSet.second) }, nextColorSet.second, duration, intervalSize, numberOfAllIntervals)
  transitionSingleRGB({ ...toRefs(currentColorSet.third) }, nextColorSet.third, duration, intervalSize, numberOfAllIntervals)
}

const transitionGradient = (currentColorSet: ColorSet, nextColorSet: ColorSet, secondPercent: Ref<number>, nextSecondPercent: number, duration: Millisecond, intervalSize: Millisecond = 10) => {
  const numberOfAllIntervals = Math.round(duration / intervalSize)

  transitionRGBs(currentColorSet, nextColorSet, duration, intervalSize, numberOfAllIntervals)

  const dsecondPercent = nextSecondPercent - secondPercent.value
  singleTransition(secondPercent, dsecondPercent, duration, intervalSize, numberOfAllIntervals)
}

/**
   * Get backgroundImage as in 'linear-gradient()' and 'next' function which when called changes the backgroundImage to the next one in the order passed in
   *
   * @param rgbSets arrays of 3 rgb colors
   * @param secondPercents arrays of where the second color starts in percent
   * @param transitionDur transition duration in milliseconds
   * @returns backgroundImage as in 'linear-gradient()' and the 'next' function
   */
const useGradient3Transition = (
  rgbSets: RGB3Set[], secondPercents: number[], transitionDur: Millisecond,
) => {
  const color3s = rgbSets.map(set => getColorSet(set[0], set[1], set[2]))
  // secondPercent is the the percent where the second rgb value starts
  let color3Index = 0

  const _secondPercent = ref(secondPercents[color3Index])
  const currentColorSet = reactive({
    first: color3s[color3Index].first,
    second: color3s[color3Index].second,
    third: color3s[color3Index].third,
  })

  /**
     * @returns 'linear-gradient( ... )' as in css
     */
  const backgroundImage = computed(() => {
    const { r: r1, g: g1, b: b1 } = toRefs(currentColorSet.first)
    const { r: r2, g: g2, b: b2 } = toRefs(currentColorSet.second)
    const { r: r3, g: g3, b: b3 } = toRefs(currentColorSet.third)
    return `linear-gradient(180deg, rgb(${`${r1.value},${b1.value},${g1.value}`}) 0%, rgb(${`${r2.value},${b2.value},${g2.value}`}) ${_secondPercent.value}%, rgb(${`${r3.value},${b3.value},${g3.value}`}) 100%)`
  })

  /**
     * Call this to change to the next background gradient
     *
     * @param overwrite pass in optional {'rgbSet', 'secondPercent', 'dur'} to overwrite the next color, second percent, and/or transition duration
     */
  const next = (overwrite?: { rgbSet?: RGB3Set; secondPercent?: number; dur?: Millisecond }) => {
    const rgbSet = overwrite?.rgbSet
    const secondPercent = overwrite?.secondPercent
    const dur = overwrite?.dur

    color3Index++
    transitionGradient(
      currentColorSet,
      rgbSet ? getColorSet(rgbSet[0], rgbSet[1], rgbSet[2]) : color3s[color3Index],
      _secondPercent,
      secondPercent ?? secondPercents[color3Index],
      dur ?? transitionDur,
    )
  }

  return { backgroundImage, next }
}

export default useGradient3Transition
