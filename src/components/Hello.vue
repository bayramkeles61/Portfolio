<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings text-4xl p-20">
    <h1 class="one">{{ msg }}</h1>
  </div>
</template>
<style>
.one {
  font-family: "VT323";
  color: rgb(177, 253, 0);
  text-shadow: 1px 1px 2px rgb(226, 255, 183), 0 0 1em rgb(226, 255, 183), 0 0 0.2em green;
}
</style>
