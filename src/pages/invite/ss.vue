<script setup lang="ts">
import { replay, setMetadata } from '~/utils'

setMetadata(
  'This is the title',
  'This is the description. I have things to do but I am lazy so I lay down on my bed with my phone.',
  'https://this-is-the-website.com',
  'https://i.kym-cdn.com/entries/icons/original/000/034/915/vibingcatttt.gif',
)

replay()
</script>

<template>
  <div></div>
</template>

<route lang="yaml">
meta:
  layout: invite
</route>
