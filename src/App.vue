<script setup lang="ts">
const { enter, isSupported } = useFullscreen()
onMounted(() => isSupported && enter())
</script>

<template>
  <router-view />
</template>
