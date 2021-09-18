<script setup lang="ts">
const props = defineProps<{
  resultFullName: string
  resultDetail: string
}>()
</script>

<template>
  <div>
    <h1 class="text-2rem whitespace-pre">
      {{ props.resultFullName }}
    </h1>
    <p class="mt-3">
      {{ props.resultDetail }}
    </p>
  </div>
</template>

<style>

</style>
