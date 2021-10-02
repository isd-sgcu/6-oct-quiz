<template>
  <main
    class="sky min-h-screen w-full transition ease-in-out duration-500"
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
