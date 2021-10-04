<script setup lang="ts">
import { setResult } from '~/utils'

const { fullName, detail, url, image } = setResult('al')

</script>

<template>
  <Result
    :image="image"
    :full-name="fullName"
    :detail="detail"
    :url="url"
  />
</template>
