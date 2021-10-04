<script setup lang="ts">
import { setResult } from '~/utils'

const { fullName, detail, url } = setResult('al')

</script>

<template>
  <Result :full-name="fullName" :detail="detail" :url="url" />
</template>
