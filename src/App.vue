<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
</script>
<template>
  <div class="h-screen w-screen flex items-center justify-center p-20">
    <HomeView />
  </div>
</template>

<style>
*,
*::before,
*::after {
  font-family: "Open Sans";
}
html {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
