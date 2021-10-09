<script setup lang="ts">
import useGradient3Transition from '~/useGradient3Transition'

const { backgroundImage, next, reset } = useGradient3Transition(
  [
    // [120, 103, 103], [235, 196, 169], [204, 128, 118] consists of 3 rgb colors from 3 hex colors
    [[120, 103, 103], [235, 196, 169], [204, 128, 118]],
    [[87, 70, 59], [230, 182, 149], [164, 57, 43]],
    [[120, 103, 103], [235, 196, 169], [204, 128, 118]],
    [[87, 70, 59], [230, 182, 149], [164, 57, 43]],
  ],
  [66, 33, 66, 33],
  1000,
)
</script>

<template>
  <div class="min-h-screen" :style="{ backgroundImage }">
    <button class="bg-white p-3 rounded" @click="next()">
      Change background
    </button>
    <button class="bg-white p-3 rounded ml-3" @click="reset">
      Reset for the next call
    </button>
    <h1 class="text-xl text-white">
      {{ backgroundImage }}
    </h1>
  </div>
</template>
