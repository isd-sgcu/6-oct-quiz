<script setup lang="ts">
// import { replay } from '~/utils'

const title = 'This is the title'
const description = 'This is the description. I have things to do but I am lazy so I lay down on my bed with my phone.'
const url = 'https://this-is-the-website.com'
const image = 'https://i.kym-cdn.com/entries/icons/original/000/034/915/vibingcatttt.gif'

useHead({
  title,
  meta: [
    { name: 'description', content: description },

    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:locale', content: 'th_TH' },
    { property: 'og:site_name', content: '6 oct' },

    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: url },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:image', content: image },

  ],
})

// replay()
</script>

<template>
  <div></div>
</template>

<route lang="yaml">
meta:
  layout: invite
</route>
