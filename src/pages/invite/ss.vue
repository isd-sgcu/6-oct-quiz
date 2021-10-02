<script setup lang="ts">
import { replay } from '~/utils'

useHead({
  title: 'Yo',
  meta: [
    { name: 'description', content: 'This is a description.' },
    { property: 'og:locale', content: '' },
    { property: 'og:type', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' },
    { property: 'og:url', content: '' },
    { property: 'og:site_name', content: '' },
    { property: 'og:image', content: '' },
    { property: 'twitter:card', content: '' },
    { property: 'twitter:url', content: '' },
    { property: 'twitter:title', content: '' },
    { property: 'twitter:description', content: '' },
    { property: 'twitter:image', content: '' },
  ],
})

replay()
</script>

<template>
  <div></div>
</template>
