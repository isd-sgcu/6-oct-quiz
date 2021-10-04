<script setup lang="ts">
import { CharacterKeyOption } from '~/types'
import { setResult } from '~/utils'
const characterKey: CharacterKeyOption = 'wichitchai'
const { fullName, detail, url, image, credit, creditLink } = setResult(characterKey)
</script>

<template>
  <Result
    :image="image"
    :full-name="fullName"
    :detail="detail"
    :url="url"
    :character-key="characterKey"
    :credit="credit"
    :credit-link="creditLink"
  />
</template>
