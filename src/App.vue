<script setup lang="ts">
const { enter, isSupported } = useFullscreen()
onMounted(
  () => useEventListener(
    'click', () => isSupported && enter(), { once: true },
  ),
)

</script>

<template>
  <router-view />
</template>
