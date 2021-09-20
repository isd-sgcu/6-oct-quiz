<script setup lang="ts">
import NavPath from './path.json'

const sidebarOpen = ref<boolean>(false)

const handleSidebarOpen = () => {
  sidebarOpen.value = true
  document.body.style.overflow = 'hidden'
}

const handleSidebarClose = () => {
  sidebarOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <div class="flex items-center justify-between px-5 pt-3 pb-3">
    <div>
      <img src="https://via.placeholder.com/150" alt="logo" class="w-[150px] h-[50px]">
    </div>
    <div class="flex <lg:hidden">
      <router-link v-for="item in NavPath" :key="item.title" :to="item.link">
        <ParagraphText class="mx-3">
          {{ item.title }}
        </ParagraphText>
      </router-link>
    </div>
    <div class="lg:hidden">
      <cil-hamburger-menu class="text-size-[2rem] cursor-pointer" @click="() => handleSidebarOpen()" />
    </div>
    <Sidebar v-if="sidebarOpen" :handle-close="() => handleSidebarClose()" />
  </div>
</template>
