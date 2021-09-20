<script setup lang="ts">
</script>

<template>
  <div class="flex items-center justify-between px-5 pt-3 pb-3">
    <div>
      <img src="https://via.placeholder.com/150" alt="logo" class="w-[150px] h-[50px]">
    </div>
    <div class="flex <lg:hidden">
      <p class="mx-3">
        Hello World 1
      </p>
      <p class="mx-3">
        Hello World 2
      </p>

      <p class="mx-3">
        Hello World 3
      </p>
    </div>
    <div class="lg:hidden">
      <cil-hamburger-menu class="text-size-[2rem] cursor-pointer" />
    </div>
    <Sidebar />
  </div>
</template>
