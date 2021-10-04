<script setup lang="ts">
import { goToIndex, setMetadata } from '~/utils'

setMetadata({
  title: 'คุณคือ วิภา ดาวมณี',
  image: 'https://i.kym-cdn.com/entries/icons/original/000/034/915/vibingcatttt.gif',
})

goToIndex()
</script>

<template>
  <div></div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
