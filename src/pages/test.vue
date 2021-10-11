<script setup lang="ts">
import useGradient3Transition from '~/useGradient3Transition'

const { backgroundImage, next, reset, color3s } = useGradient3Transition(
  [
    [[255, 255, 255], [255, 255, 255], [255, 255, 255]],
    [[245, 245, 245], [245, 245, 245], [255, 248, 243]],
    [[235, 235, 235], [235, 235, 235], [252, 237, 227]],
    [[228, 223, 223], [228, 223, 223], [247, 226, 211]],
    [[205, 198, 198], [251, 224, 204], [255, 215, 210]],
    [[188, 177, 177], [244, 214, 192], [239, 198, 193]],
    [[168, 157, 157], [244, 214, 192], [231, 182, 175]],
    [[151, 134, 134], [235, 196, 169], [222, 156, 147]],
    [[120, 103, 103], [235, 196, 169], [204, 128, 118]],
    [[87, 70, 59], [229, 182, 149], [164, 57, 43]],
    [[87, 70, 59], [229, 182, 149], [164, 57, 43]],
  ],
  [0, 0, 0, 0, 83.12, 83.12, 74.27, 66.98, 66.98, 66.98, 66.98],
  1200,
)
</script>

<template>
  <div class="min-h-screen" :style="{ backgroundImage }">
    <h1 class="text-5xl" @click="next()">
      Click me
    </h1>
    <h1 class="text-5xl" @click="reset">
      reset
    </h1>
    <span>{{ backgroundImage }}</span><br />
    <span>{{ color3s[0] }}</span><br /><br />
    <span>{{ color3s[1] }}</span><br />
    <span>{{ color3s[2] }}</span><br />
    <span>{{ color3s[3] }}</span>
  </div>
</template>
