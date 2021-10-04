<template>
  <main
    class="sky min-h-screen w-full overflow-hidden"
    :class="'bg-grad-' + qNumber"
  >
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useGameStore } from '~/stores/game'

const gameStore = useGameStore()

const qNumber = computed(() => gameStore.currentIndex + 1)
</script>

<style>
.sky {
  transition: 0.5s background-image ease;
}
</style>
