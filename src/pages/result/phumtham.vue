<script setup lang="ts">
import { CharacterKeyOption } from '~/types'
import { setResult } from '~/utils'
const characterKey: CharacterKeyOption = 'phumtham'
const { fullName, detail, url, image } = setResult(characterKey)
</script>

<template>
  <Result
    :image="image"
    :full-name="fullName"
    :detail="detail"
    :url="url"
    :character-key="characterKey"
  />
</template>
